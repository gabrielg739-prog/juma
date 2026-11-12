Unicode true
ManifestDPIAware true
SetCompressor /SOLID zlib
!include "MUI2.nsh"
!include "LogicLib.nsh"

!define APPNAME "Gene"
!define APPVER "1.0"
!ifndef APPDIR
  !define APPDIR "..\build\app\gene"
!endif
!define UNKEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\GeneTutor"

Name "${APPNAME}"
OutFile "..\build\Gene-Instalador.exe"
RequestExecutionLevel user
InstallDir "$LOCALAPPDATA\Gene"
BrandingText "Gene, tutor de optimización"
Icon "installer.ico"
UninstallIcon "installer.ico"

!define MUI_ICON "installer.ico"
!define MUI_UNICON "installer.ico"
!define MUI_ABORTWARNING
!define MUI_WELCOMEPAGE_TITLE "Bienvenido a Gene"
!define MUI_WELCOMEPAGE_TEXT "Gene es tu tutor de optimización: una red neuronal que te explica los capítulos 1, 2 y 4 y la Tarea 1 con animaciones y voz.$\r$\n$\r$\nTodo va incluido. Funciona sin internet.$\r$\n$\r$\nHaz clic en Instalar."
!define MUI_FINISHPAGE_TITLE "Gene está instalado"
!define MUI_FINISHPAGE_TEXT "Encontrarás el acceso directo de Gene en el escritorio y en el menú Inicio."
!define MUI_FINISHPAGE_RUN
!define MUI_FINISHPAGE_RUN_TEXT "Abrir Gene ahora"
!define MUI_FINISHPAGE_RUN_FUNCTION LaunchGene

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!insertmacro MUI_LANGUAGE "Spanish"

; Convierte la ruta de $INSTDIR en una URL file:/// (barras y %20). Resultado en $1.
Function MakeUrl
  StrCpy $1 "file:///"
  StrCpy $2 0
  StrLen $3 "$INSTDIR\index.html"
  ${While} $2 < $3
    StrCpy $4 "$INSTDIR\index.html" 1 $2
    ${If} $4 == "\"
      StrCpy $1 "$1/"
    ${ElseIf} $4 == " "
      StrCpy $1 "$1%20"
    ${Else}
      StrCpy $1 "$1$4"
    ${EndIf}
    IntOp $2 $2 + 1
  ${EndWhile}
FunctionEnd

; Busca Edge o Chrome. Resultado en $R0 (vacío si no hay).
Function FindBrowser
  StrCpy $R0 ""
  SetRegView 64
  ReadRegStr $R1 HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\msedge.exe" ""
  ${If} $R1 != ""
  ${AndIf} ${FileExists} "$R1"
    StrCpy $R0 "$R1"
  ${EndIf}
  ${If} $R0 == ""
    ReadRegStr $R1 HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe" ""
    ${If} $R1 != ""
    ${AndIf} ${FileExists} "$R1"
      StrCpy $R0 "$R1"
    ${EndIf}
  ${EndIf}
  ${If} $R0 == ""
    ReadRegStr $R1 HKCU "SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe" ""
    ${If} $R1 != ""
    ${AndIf} ${FileExists} "$R1"
      StrCpy $R0 "$R1"
    ${EndIf}
  ${EndIf}
  SetRegView 32
  ${If} $R0 == ""
  ${AndIf} ${FileExists} "$PROGRAMFILES32\Microsoft\Edge\Application\msedge.exe"
    StrCpy $R0 "$PROGRAMFILES32\Microsoft\Edge\Application\msedge.exe"
  ${EndIf}
  ${If} $R0 == ""
  ${AndIf} ${FileExists} "$PROGRAMFILES64\Microsoft\Edge\Application\msedge.exe"
    StrCpy $R0 "$PROGRAMFILES64\Microsoft\Edge\Application\msedge.exe"
  ${EndIf}
  ${If} $R0 == ""
  ${AndIf} ${FileExists} "$PROGRAMFILES64\Google\Chrome\Application\chrome.exe"
    StrCpy $R0 "$PROGRAMFILES64\Google\Chrome\Application\chrome.exe"
  ${EndIf}
  ${If} $R0 == ""
  ${AndIf} ${FileExists} "$PROGRAMFILES32\Google\Chrome\Application\chrome.exe"
    StrCpy $R0 "$PROGRAMFILES32\Google\Chrome\Application\chrome.exe"
  ${EndIf}
  ${If} $R0 == ""
  ${AndIf} ${FileExists} "$LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
    StrCpy $R0 "$LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
  ${EndIf}
FunctionEnd

Function LaunchGene
  ExecShell "open" "$DESKTOP\Gene.lnk"
FunctionEnd

Section "Instalar"
  SetOutPath "$INSTDIR"
  File "gene.ico"
  File "${APPDIR}\index.html"
  File "${APPDIR}\fonts.css"
  SetOutPath "$INSTDIR\fonts"
  File /r "${APPDIR}\fonts\*.*"
  SetOutPath "$INSTDIR\audio"
  File /r "${APPDIR}\audio\*.*"
  SetOutPath "$INSTDIR"

  Call MakeUrl
  Call FindBrowser
  Delete "$DESKTOP\Gene.lnk"
  CreateDirectory "$SMPROGRAMS\Gene"
  StrCmp $R0 "" sinNavegador
    CreateShortCut "$DESKTOP\Gene.lnk" "$R0" '--app="$1" --window-size=1280,820 --autoplay-policy=no-user-gesture-required' "$INSTDIR\gene.ico" 0
    CreateShortCut "$SMPROGRAMS\Gene\Gene.lnk" "$R0" '--app="$1" --window-size=1280,820 --autoplay-policy=no-user-gesture-required' "$INSTDIR\gene.ico" 0
    Goto accesos
  sinNavegador:
    CreateShortCut "$DESKTOP\Gene.lnk" "$INSTDIR\index.html" "" "$INSTDIR\gene.ico" 0
    CreateShortCut "$SMPROGRAMS\Gene\Gene.lnk" "$INSTDIR\index.html" "" "$INSTDIR\gene.ico" 0
  accesos:
  CreateShortCut "$SMPROGRAMS\Gene\Desinstalar Gene.lnk" "$INSTDIR\Desinstalar.exe"

  WriteUninstaller "$INSTDIR\Desinstalar.exe"
  WriteRegStr HKCU "${UNKEY}" "DisplayName" "Gene, tutor de optimización"
  WriteRegStr HKCU "${UNKEY}" "DisplayVersion" "${APPVER}"
  WriteRegStr HKCU "${UNKEY}" "Publisher" "Gene"
  WriteRegStr HKCU "${UNKEY}" "DisplayIcon" "$INSTDIR\gene.ico"
  WriteRegStr HKCU "${UNKEY}" "UninstallString" '"$INSTDIR\Desinstalar.exe"'
  WriteRegDWORD HKCU "${UNKEY}" "NoModify" 1
  WriteRegDWORD HKCU "${UNKEY}" "NoRepair" 1
  WriteRegDWORD HKCU "${UNKEY}" "EstimatedSize" 66000
SectionEnd

Section "Uninstall"
  Delete "$DESKTOP\Gene.lnk"
  RMDir /r "$SMPROGRAMS\Gene"
  RMDir /r "$INSTDIR\audio"
  RMDir /r "$INSTDIR\fonts"
  Delete "$INSTDIR\index.html"
  Delete "$INSTDIR\fonts.css"
  Delete "$INSTDIR\gene.ico"
  Delete "$INSTDIR\Desinstalar.exe"
  RMDir "$INSTDIR"
  DeleteRegKey HKCU "${UNKEY}"
SectionEnd

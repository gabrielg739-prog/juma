/* ===== Para tu cuaderno: lo que debes copiar y frases para intervenir ===== */
var NOTES={
'1':{t:'Capítulo 1 · Breve historia de la optimización',items:[
['def','Optimizar: buscar el mejor valor posible de una función (maximizar o minimizar) respetando unas restricciones.'],
['def','Principio de mínima acción: muchos fenómenos físicos «optimizan». La luz sigue el principio de Fermat (menor tiempo) → ley de Snell.'],
['form','Ley de Snell (Fermat, 1657): sen θ₁ / v₁ = sen θ₂ / v₂','\\frac{\\sin\\theta_1}{v_1}=\\frac{\\sin\\theta_2}{v_2}'],
['ej','Euclides (300 a. C.): con perímetro fijo, el cuadrado tiene la mayor área. Herón (100 a. C.): en un espejo, ángulo de incidencia = ángulo de reflexión.'],
['ej','Braquistócrona (Bernoulli 1696, Newton 1697): la curva de descenso más rápido es una cicloide → origen del cálculo de variaciones (Euler y Lagrange).'],
['def','Línea del tiempo clave: Monge 1781 (transporte) · Legendre 1805 y Gauss (mínimos cuadrados) · Cauchy 1847 (gradiente) · Jensen 1906 (convexidad) · Menger 1930 (viajante).'],
['def','Programación lineal: Kantorovich 1939, Koopmans, Dantzig 1947 (simplex). KKT: Karush 1939, Kuhn y Tucker 1951. Programación dinámica: Bellman 1957.'],
['def','Heurística: prueba y error; soluciones buenas en tiempo razonable, sin garantía de ser óptimas (Turing, Bombe, 1940).'],
['def','Metaheurísticas: AG (Holland, 1975), estrategias evolutivas (1963), programación evolutiva (1966), recocido simulado (1983), tabú (1986), hormigas (1992), PSO (1995), búsqueda armónica (2001), abejas (2004-05), luciérnagas (2008).'],
['def','NFL (Wolpert y Macready, 1997): ningún algoritmo es el mejor para todos los problemas.'],
['int','«La optimización convexa es especial porque cualquier óptimo local es global; por eso conviene reformular los problemas de ingeniería como convexos.»'],
['int','Pregunta para el profesor: «Si los teoremas NFL dicen que todos los algoritmos rinden igual en promedio, ¿cómo elegimos el algoritmo para un problema concreto?»']]},
'2':{t:'Capítulo 2 · Optimización en ingeniería',items:[
['form','Forma genérica: minimizar fᵢ(x), i = 1…M; sujeto a φⱼ(x) = 0, j = 1…J; ψₖ(x) ≤ 0, k = 1…K; x = (x₁, …, xₙ)ᵀ','\\min f_i(\\mathbf{x}),\\;\\phi_j(\\mathbf{x})=0,\\;\\psi_k(\\mathbf{x})\\le0'],
['def','Vocabulario: variables de diseño o decisión; función objetivo (coste o energía); espacio de diseño o búsqueda; espacio de soluciones o respuesta; restricciones.'],
['def','Casos especiales: problema de viabilidad (sin objetivo); caja negra (sin fórmula explícita, p. ej. CFD); funcional (objetivo integral → cálculo de variaciones / control óptimo).'],
['def','Clasificación: objetivos (único / multiobjetivo) · restricciones (sin / igualdad / desigualdad) · forma (lineal / no lineal) · paisaje (unimodal-convexo / multimodal) · variables (discreta, entera, combinatoria, continua, mixta) · determinismo (determinista / estocástico-robusto).'],
['def','Algoritmos: determinísticos (con gradiente: Newton-Raphson; sin gradiente: Hooke-Jeeves, Nelder-Mead) y estocásticos (heurísticos y metaheurísticos, de población o de trayectoria).'],
['def','Metaheurística = selección de los mejores (converge) + aleatorización (escapa de óptimos locales y da diversidad).'],
['form','Notación de orden: f = O(g) si lim f/g = K finito ≠ 0; f ~ g si K = 1; f = o(g) si el límite es 0.','f=O(g)\\iff\\lim_{x\\to x_0}\\frac{f}{g}=K\\ne0'],
['ej','Domina la mayor potencia: n² + 2n + 3 = O(n²). Burbuja O(n²) vs quicksort O(n log n): para n = 1000, ~10⁶ frente a ~3×10³ operaciones.'],
['def','P: resoluble en tiempo polinómico. NP: verificable en tiempo polinómico. NP-completo: NP-difícil al que se reducen todos los NP. Viajante: NP-difícil.'],
['form','NFL: Σ_f P(sₘʸ | f, m, A) = Σ_f P(sₘʸ | f, m, B)','\\sum_f P(s_m^y|f,m,A)=\\sum_f P(s_m^y|f,m,B)'],
['int','«Antes de elegir un método hay que clasificar el problema: si es convexo y suave conviene un método de gradiente; si es multimodal o de caja negra, una metaheurística.»'],
['int','Pregunta para el profesor: «En un problema real con ruido, ¿optimizamos la media del objetivo, su varianza o una combinación?»']]},
'4':{t:'Capítulo 4 · Métodos clásicos de optimización I',items:[
['form','Sin restricciones: f′(x*) = 0 (necesaria). f″ > 0 mínimo; f″ < 0 máximo; indefinida → posible punto de silla.',"f'(x_*)=0,\\quad f''(x_*)\\gtrless0"],
['ej','f(x) = x e^(−x²): x* = ±√2/2; máximo ≈ 0,429 en +√2/2 y mínimo ≈ −0,429 en −√2/2.'],
['form','Newton: x⁽ⁿ⁺¹⁾ = x⁽ⁿ⁾ − H⁻¹∇f(x⁽ⁿ⁾). Exacto en un paso si f es cuadrática. Con H⁻¹ = I → cuasi-Newton = descenso.','\\mathbf{x}^{(n+1)}=\\mathbf{x}^{(n)}-\\mathbf{H}^{-1}\\nabla f(\\mathbf{x}^{(n)})'],
['form','Descenso más pronunciado: x⁽ⁿ⁺¹⁾ = x⁽ⁿ⁾ − α∇f(x⁽ⁿ⁾); α pequeño = lento, grande = diverge.','\\mathbf{x}^{(n+1)}=\\mathbf{x}^{(n)}-\\alpha\\nabla f(\\mathbf{x}^{(n)})'],
['ej','Ejemplo 4.1: f = 10x₁² + 5x₁x₂ + 10(x₂ − 3)², desde (10, 15): ∇f = (275, 290), α₀ ≈ 0,04001; en 3 iteraciones ≈ (−0,8; 3,2) = (−4/5, 16/5).'],
['form','Wolfe: Armijo f(xₖ + αsₖ) ≤ f(xₖ) + γ₁α sₖᵀ∇f(xₖ); curvatura sₖᵀ∇f(xₖ + αsₖ) ≥ γ₂ sₖᵀ∇f(xₖ); 0 < γ₁ < γ₂ < 1.','f(\\mathbf{x}_k+\\alpha\\mathbf{s}_k)\\le f(\\mathbf{x}_k)+\\gamma_1\\alpha\\mathbf{s}_k^T\\nabla f(\\mathbf{x}_k)'],
['form','Gradientes conjugados (Au = b): rₙ = b − Auₙ; αₙ = rₙᵀrₙ / dₙᵀAdₙ; uₙ₊₁ = uₙ + αₙdₙ; βₙ = rₙ₊₁ᵀrₙ₊₁ / rₙᵀrₙ; dₙ₊₁ = rₙ₊₁ + βₙdₙ; d₀ = r₀.','\\alpha_n=\\frac{\\mathbf{r}_n^T\\mathbf{r}_n}{\\mathbf{d}_n^T\\mathbf{A}\\mathbf{d}_n},\\;\\beta_n=\\frac{\\mathbf{r}_{n+1}^T\\mathbf{r}_{n+1}}{\\mathbf{r}_n^T\\mathbf{r}_n}'],
['ej','Programación lineal (ISP): max P = 2x₁ + 3x₂; x₁ + x₂ ≤ 20, x₁ ≤ 16, x₂ ≤ 10 → óptimo en el vértice B(10, 10), P = 50 (50 000 libras).'],
['def','Simplex (Dantzig, 1947): variables de holgura → forma estándar Ax = b, x ≥ 0; BFS = vértice; pivotar a vértices adyacentes mientras Z mejore. ISP: O (Z = 0) → A (Z = 30) → B (Z = 50).'],
['form','Penalización: Π = f + Σ μᵢφᵢ² + Σ νⱼψⱼ² (coeficientes grandes).','\\Pi=f+\\sum\\mu_i\\phi_i^2+\\sum\\nu_j\\psi_j^2'],
['form','Lagrange: L = f + Σ λⱼgⱼ; ∂L/∂xᵢ = 0 y ∂L/∂λⱼ = gⱼ = 0. Ej. 4.2: λ = 2/5 → (1/5, 12/5). Ej. 4.3: mínimo en B(−1, 0), f = −1.','L=f+\\sum_j\\lambda_jg_j'],
['form','KKT: ∇f + Σλᵢ∇φᵢ + Σμⱼ∇ψⱼ = 0; ψⱼ ≤ 0; μⱼ ≥ 0; μⱼψⱼ = 0 (holgura complementaria). Ej. 4.4: óptimo (−1/3, 5/3), f = 113/9.','\\mu_j\\psi_j(\\mathbf{x}_*)=0,\\;\\mu_j\\ge0'],
['int','«En el ejemplo 4.4 del libro hay erratas: en el caso 3 el punto correcto es (6/5, 16/5) y en el caso 4 los multiplicadores son μ₁ = 4/9 y μ₂ = 46/9; la conclusión no cambia.»'],
['int','Pregunta para el profesor: «¿Cuándo conviene usar penalización en vez de Lagrange o KKT en un problema de ingeniería real?»']]}};
var NOTE_KIND={def:'Concepto',form:'Fórmula',ej:'Ejemplo',int:'Para intervenir'};
/* Escenas narradas «Para tu cuaderno» (se insertan en la sección de resúmenes) */
chapter('cu','Para tu cuaderno');
T('cu','Para tu cuaderno','Lo que debes copiar y cómo intervenir en clase',[['Ahora te dicto lo que debes copiar en tu cuaderno, capítulo por capítulo, y te doy frases e ideas para intervenir en clase. También lo tienes todo en la pestaña Cuaderno, con botón para copiar.','','point']]);
['1','2','4'].forEach(k=>{const N=NOTES[k];L('cu','Para tu cuaderno · '+N.t.split(' · ')[0],N.t.split(' · ')[1],{bl:N.items.map((it,i)=>[(NOTE_KIND[it[0]]+': ')+it[1],i+1]),eq:N.items.filter(it=>it[2]).slice(0,4).map(it=>[it[2],N.items.indexOf(it)+1])},N.items.map((it,i)=>[(it[0]==='int'?(it[1].startsWith('Pregunta')?'Para participar, puedes preguntar: ':'Una buena intervención: '):'Copia: ')+it[1].replace(/^Pregunta para el profesor: /,''),i+1,it[0]==='int'?'point':undefined]))});
L('cu','Para tu cuaderno · Intervenir en clase','Cómo participar con buenas intervenciones',{bl:[['Conecta historia y método: «el método del gradiente viene de Cauchy, 1847».',1],['Clasifica antes de resolver: «este problema es no lineal, con restricciones de desigualdad y convexo».',2],['Justifica con una condición: «es mínimo porque f″ > 0» o «el óptimo lineal está en un vértice».',3],['Propón una comparación: «Newton converge en un paso en cuadráticas, pero calcular la hessiana es caro».',4],['Señala límites: «la penalización necesita coeficientes grandes; Lagrange lo evita».',5]]},[
['Cinco formas de intervenir bien en clase. Primera: conecta la historia con el método. Por ejemplo: el método del gradiente viene de la nota de Cauchy de 1847.',1],
['Segunda: clasifica el problema antes de resolverlo. Por ejemplo: este problema es no lineal, con restricciones de desigualdad y convexo.',2,'point'],
['Tercera: justifica con una condición. Es mínimo porque f segunda es positiva, o el óptimo lineal está en un vértice.',3],
['Cuarta: compara métodos. Newton converge en un paso en funciones cuadráticas, pero calcular la hessiana es costoso.',4],
['Quinta: señala límites. La penalización necesita coeficientes muy grandes, y los multiplicadores de Lagrange lo evitan.',5,'happy']]);

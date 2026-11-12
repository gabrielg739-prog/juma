/* ===== TAREA 1: Identificación de una función desconocida con gradiente descendente ===== */
chapter('t1','Tarea 1: función desconocida');
T('t1','Tarea 1','Identificar una función desconocida con el gradiente descendente',[
['¡Llegó la Tarea 1! Vamos a resolverla juntos, paso a paso, de forma sencilla, pero con todo el rigor que pide la materia.','','happy'],
['Te la explico primero con ideas que entendería hasta un niño, y luego con las fórmulas exactas de Yang, capítulo 4. Al final te dejo el resumen para tu cuaderno.']]);
L('t1','Tarea 1 · Planteamiento','La caja misteriosa',{viz:'mbox',key:'Hay que encontrar un modelo y(x1, x2) tal que |y(x1, x2) − χᵢ| < 0,1 en todas las muestras, usando el gradiente descendente.'},[
['Imagina una caja cerrada. Le metes dos números, x1 y x2, y sale otro número, chi. No podemos abrirla: es la misión misteriosa.',0],
['Lo único que tenemos son algunas pruebas: qué entró y qué salió. Mira cómo pasan los datos por la caja.',1,'point'],
['Nuestra misión: construir una fórmula y de x1, x2 que imite a la caja tan bien que, en cada prueba, la diferencia entre lo que predice y lo que se midió sea menor que 0,1.',2],
['Y debemos encontrarla con el método del gradiente descendente del capítulo 4 de Yang. Las entradas viven en el intervalo de cero a diez.',2]]);
L('t1','Tarea 1 · Los datos','Leer bien la tabla',{viz:'tdata',bl:[['El valor antes de la coma es x1 y el de después es x2.',1],['Muestras: (0, 0) → 0; (0, 3) → 2,5; (0, 6) → 5.',2],['Ojo: x1 = 0 en las tres muestras.',3],['Los tres puntos están sobre una recta: 2,5/3 = 5/6 ≈ 0,8333.',4]]},[
['Primero, leer bien los datos. El enunciado dice que el número antes de la coma es x1 y el de después es x2.',1],
['Tenemos tres muestras: cero coma cero da cero; cero coma tres da 2,5; y cero coma seis da 5.',2],
['Algo muy importante: x1 vale cero en las tres. Es como querer saber cuánto azúcar endulza un café sin ponerle azúcar nunca. Volveremos a esto al final.',3,'warn'],
['Si dibujamos la salida contra x2, los tres puntos caen sobre una misma recta: 2,5 entre 3 es igual a 5 entre 6, unos 0,8333. ¡Eso ya es una pista!',4,'point']]);
L('t1','Tarea 1 · Teoría de Yang','La herramienta: bajar la montaña',{viz:'descent',eq:[['\\mathbf{s}_k=-\\nabla f(\\mathbf{x}_k)',1,'dirección de máximo descenso'],['\\mathbf{x}_{k+1}=\\mathbf{x}_k+\\alpha_k\\mathbf{s}_k=\\mathbf{x}_k-\\alpha_k\\nabla f(\\mathbf{x}_k)',2,'Yang, sección 4.2.2'],['\\psi(\\alpha_k)=f(\\mathbf{x}_k+\\alpha_k\\mathbf{s}_k)',3,'búsqueda lineal, ec. 4.17'],['f(\\mathbf{x}_k+\\alpha_k\\mathbf{s}_k)\\le f(\\mathbf{x}_k)+\\gamma_1\\alpha_k\\mathbf{s}_k^T\\nabla f(\\mathbf{x}_k)',4,'Armijo, ec. 4.18'],['\\mathbf{s}_k^T\\nabla f(\\mathbf{x}_k+\\alpha_k\\mathbf{s}_k)\\ge\\gamma_2\\,\\mathbf{s}_k^T\\nabla f(\\mathbf{x}_k)',4,'curvatura, ec. 4.19; 0 < γ₁ < γ₂ < 1']]},[
['Imagina que estás en una montaña con niebla y quieres llegar al valle. No ves el fondo, pero sí sientes hacia dónde baja el suelo bajo tus pies.',0],
['Ese hacia dónde sube es el gradiente. Así que caminas al revés: s sub k igual a menos el gradiente.',1,'point'],
['Y das un paso de tamaño alfa: x nuevo igual a x menos alfa por el gradiente. Es el descenso más pronunciado de la sección 4.2.2.',2],
['Yang dice que hay dos decisiones: la dirección y el tamaño del paso. Elegir alfa se reduce a una función de una sola variable, psi de alfa, aunque haya muchas variables.',3],
['Un paso aceptable cumple las condiciones de Wolfe: bajar lo suficiente, Armijo, y no ser ridículamente corto, curvatura. Y Yang avisa: cerca del mínimo el gradiente es casi cero y se avanza lento. En esta tarea, en vez de parar cuando el gradiente es pequeño, paramos cuando todos los errores sean menores que 0,1.',4]]);
L('t1','Tarea 1 · Paso 1','El modelo: tres perillas',{viz:'knobs',eq:[['y(x_1,x_2)=w_1x_1+w_2x_2+b',1,'modelo lineal con término independiente'],['\\mathbf{w}=(w_1,\\,w_2,\\,b)\\;\\text{son las incógnitas}',2]]},[
['Como no sabemos qué hay dentro de la caja, empezamos por lo más simple que pueda funcionar: una recta, o mejor dicho, un plano. y igual a w1 por x1, más w2 por x2, más b.',1],
['Piensa en w1, w2 y b como tres perillas. Lo que vamos a buscar no son las entradas, sino la posición correcta de las perillas.',2,'point'],
['¿Por qué lineal? Porque los tres puntos ya están en una recta. Y además, con este modelo el error será una función cuadrática, que es convexa: tiene un solo valle, así que el descenso no puede quedar atrapado en un mínimo falso. Mira cómo, al girar las perillas, la línea azul se acomoda a los puntos.',3,'happy']]);
L('t1','Tarea 1 · Paso 2','¿Qué tan mal lo hacemos? La función objetivo',{viz:'msesq',eq:[['e_i=y_i-\\chi_i',1,'error de cada muestra'],['L(\\mathbf{w})=\\frac1N\\sum_{i=1}^{N}(y_i-\\chi_i)^2,\\quad N=3',2,'error cuadrático medio (ECM)']]},[
['Para saber si las perillas están bien, medimos el error de cada muestra: lo que predice el modelo menos lo que se midió.',1],
['Elevamos cada error al cuadrado y sacamos el promedio: es el error cuadrático medio, L. Los cuadrados rojos son literalmente esos errores al cuadrado.',2,'point'],
['Cuando la línea se acerca a los puntos, los cuadrados se encogen y L baja. Nuestra montaña es L, y el valle es donde L es mínima.',3],
['¿Por qué al cuadrado y no el valor absoluto, si el criterio usa valor absoluto? Porque el valor absoluto tiene un pico en cero y no es derivable allí, mientras que el cuadrado es suave y su gradiente es lineal en el error. El criterio de 0,1 solo lo usamos para decidir cuándo parar.',4]]);
L('t1','Tarea 1 · Paso 3','La brújula: el gradiente',{eq:[['\\frac{\\partial L}{\\partial w_1}=\\frac2N\\sum e_i\\,x_{1,i}',1],['\\frac{\\partial L}{\\partial w_2}=\\frac2N\\sum e_i\\,x_{2,i}',1],['\\frac{\\partial L}{\\partial b}=\\frac2N\\sum e_i',1],['x_{1,i}=0\\;\\Rightarrow\\;\\frac{\\partial L}{\\partial w_1}=0\\;\\text{siempre}',2]],bl:[['Regla de la cadena: derivada de e² = 2e · derivada de e.',1],['Cada derivada dice cuánto sube L si giro esa perilla un poquito.',1],['Como x1 = 0, la perilla w1 nunca recibe órdenes de moverse.',2]]},[
['Ahora la brújula. Con la regla de la cadena: la derivada de e al cuadrado es 2 e por la derivada de e. Así salen tres derivadas: respecto a w1, w2 y b.',1],
['Cada una te dice cuánto sube el error si giras esa perilla un poquito. Su conjunto es el gradiente, la flecha que apunta cuesta arriba.',1,'point'],
['Fíjate en la primera: lleva multiplicado x1, que siempre es cero. Así que la derivada respecto a w1 es cero siempre: la perilla w1 nunca recibe órdenes. Esto será clave en la discusión.',2,'warn']]);
L('t1','Tarea 1 · Paso 4','¿De qué tamaño es el paso?',{viz:'stab',eq:[['\\mathbf{H}=\\frac2N\\mathbf{A}^T\\mathbf{A}=\\begin{pmatrix}0&0&0\\\\0&30&6\\\\0&6&2\\end{pmatrix}',1,'hessiana constante (L es cuadrática)'],['\\lambda\\approx0,\\;0.768,\\;31.23',1],['|1-\\alpha\\lambda|<1\\;\\Rightarrow\\;\\alpha<\\frac{2}{\\lambda_{\\max}}\\approx0.064',2],['\\alpha=0.05,\\qquad\\lambda_{\\max}/\\lambda_{\\min}\\approx41',3,'valle alargado → zigzag']]},[
['¿Pasos grandes o pequeños? Si das pasos de gigante en una montaña empinada, saltas el valle y terminas más arriba del otro lado. Si das pasitos de hormiga, tardas una eternidad.',0],
['Como L es cuadrática, su matriz de segundas derivadas, la hessiana, es constante: la de la pantalla. Sus autovalores son aproximadamente 0, 0,768 y 31,23.',1],
['En cada dirección, el error se multiplica por 1 menos alfa por lambda en cada paso. Para no explotar, eso debe ser menor que 1 en valor absoluto: alfa menor que 2 entre 31,23, unos 0,064. Mira: con alfa 0,05 el punto verde se va calmando…',2,'point'],
['…y con 0,07 el rojo rebota cada vez más lejos: diverge. Elegimos alfa igual a 0,05. Y como el cociente entre el autovalor mayor y el menor es unos 41, las curvas de nivel son elipses muy alargadas: por eso habrá zigzag, como dice Yang.',3,'warn']]);
L('t1','Tarea 1 · Paso 5','Iteración 0, a mano',{eq:[['w_1=w_2=b=0\\;\\Rightarrow\\;\\mathbf{y}=(0,0,0),\\;\\mathbf{e}=(0;\\,-2.5;\\,-5)',1],['\\frac{\\partial L}{\\partial w_2}=\\frac23[0\\cdot0+(-2.5)(3)+(-5)(6)]=\\frac23(-37.5)=-25',2],['\\frac{\\partial L}{\\partial b}=\\frac23(0-2.5-5)=-5,\\quad\\frac{\\partial L}{\\partial w_1}=0',3],['w_2=0-0.05(-25)=1.25,\\quad b=0-0.05(-5)=0.25',4],['\\max|e_i|=5\\ge0.1\\;\\Rightarrow\\;\\text{seguimos}',5]]},[
['Hagamos la primera vuelta a mano. Empezamos con todas las perillas en cero. El modelo predice cero en todo, así que los errores son cero, menos 2,5 y menos 5.',1],
['Derivada respecto a w2: dos tercios por la suma de error por x2: cero por cero, más menos 2,5 por 3, más menos 5 por 6. Eso es dos tercios de menos 37,5: menos 25.',2,'point'],
['Derivada respecto a b: dos tercios de la suma de errores, menos 7,5: menos 5. Y respecto a w1, cero.',3],
['Damos el paso, restando alfa por la derivada: w2 igual a cero menos 0,05 por menos 25, igual a 1,25; y b igual a 0,25. ¡El signo negativo del gradiente nos empuja hacia arriba, hacia los datos!',4,'happy'],
['El error máximo todavía es 5, mayor que 0,1, así que seguimos.',5]]);
L('t1','Tarea 1 · Paso 5','Iteración 1, a mano',{eq:[['\\mathbf{y}=(0.25;\\,4.00;\\,7.75),\\quad\\mathbf{e}=(0.25;\\,1.50;\\,2.75)',1],['\\frac{\\partial L}{\\partial w_2}=\\frac23[0+1.5\\cdot3+2.75\\cdot6]=\\frac23(21)=14',2],['\\frac{\\partial L}{\\partial b}=\\frac23(4.5)=3',2],['w_2=1.25-0.05\\cdot14=0.55,\\quad b=0.25-0.05\\cdot3=0.10',3],['\\max|e_i|=2.75\\ge0.1\\;\\Rightarrow\\;\\text{seguimos}',4]]},[
['Segunda vuelta. Con w2 igual a 1,25 y b igual a 0,25, el modelo predice 0,25, 4 y 7,75. Los errores son 0,25, 1,5 y 2,75: ahora son positivos. ¡Nos pasamos del objetivo!',1,'warn'],
['Por eso el gradiente cambia de signo: respecto a w2 da 14, y respecto a b da 3.',2],
['El paso nos devuelve: w2 igual a 1,25 menos 0,05 por 14, igual a 0,55; y b igual a 0,10.',3,'point'],
['El error máximo es 2,75: seguimos. Este ir y venir es el zigzag del valle alargado.',4]]);
L('t1','Tarea 1 · Paso 5','Las 13 iteraciones en el mapa',{viz:'gdpath',key:'Con α = 0,05 el criterio se cumple en la iteración 13: w₂ = 0,8135 y b = 0,0987 (máx |e| = 0,0987).',bl:[['k = 0: (0; 0), L = 10,42, máx |e| = 5',3],['k = 1: (1,25; 0,25), L = 3,29',3],['k = 2: (0,55; 0,10), L = 1,04',3],['k = 5: (0,8503; 0,1441), L = 0,0398',3],['k = 13: (0,8135; 0,0987), máx |e| = 0,0987 < 0,1 ✓',4]]},[
['El mapa muestra la montaña L vista desde arriba, en el plano de w2 y b: lo oscuro es lo bajo, y la estrella es el fondo exacto del valle.',1],
['Empezamos en cero, cero, abajo a la izquierda.',2],
['Ahora mira cómo avanza cada iteración: salta a la derecha, vuelve, salta otra vez… cada vez más cerca. Ese zigzag cruza el valle alargado.',3,'point'],
['En la iteración 13, w2 vale 0,8135 y b vale 0,0987, y el mayor error es 0,0987: por fin menor que 0,1. ¡Misión cumplida! Las dos primeras filas coinciden con nuestro cálculo a mano.',4,'happy']]);
L('t1','Tarea 1 · Paso 6','Búsqueda lineal exacta: el paso perfecto',{viz:'gdexact',eq:[['\\psi(\\alpha)=L(\\mathbf{w}_k-\\alpha\\mathbf{g}_k)\\;\\text{es una parábola}',1],['\\alpha_k^*=\\frac{\\mathbf{g}_k^T\\mathbf{g}_k}{\\mathbf{g}_k^T\\mathbf{H}\\mathbf{g}_k}',1,'mínimo de la parábola en forma cerrada'],['k=0:\\;\\alpha^*=0.03202;\\quad k=1:\\;\\alpha^*=1.3',2],['w_2=0.8325,\\;b\\approx0\\;\\text{en 2 iteraciones}',3]]},[
['¿Y si en vez de un paso fijo elegimos el mejor paso posible cada vez? Es la búsqueda lineal de la sección 4.2.3. Como L es cuadrática, psi de alfa es una parábola, y su mínimo tiene fórmula: alfa estrella igual a g traspuesta g, entre g traspuesta H g.',1],
['En la primera iteración sale alfa estrella 0,03202, y en la segunda 1,3. Mira el camino verde: dos zancadas y llega.',2,'point'],
['En solo 2 iteraciones, w2 vale 0,8325 y b casi cero. Esto confirma la idea de Yang: elegir bien alfa es tan importante como elegir bien la dirección.',3,'happy']]);
L('t1','Tarea 1 · Paso 6','Armijo y la comparación de estrategias',{viz:'convcmp',bl:[['α fijo 0,05 → 13 iteraciones; w₂ = 0,8135, b = 0,0987.',1],['α fijo 0,01 → 65 iteraciones; w₂ = 0,8129, b = 0,0994.',2],['Búsqueda exacta → 2 iteraciones; w₂ = 0,8325, b ≈ 0.',3],['Armijo (backtracking, γ₁ = 10⁻⁴): α = 0,0625 siempre → 80 iteraciones; w₂ = 0,8171.',4]]},[
['Comparemos. La gráfica muestra cómo baja L en cada estrategia, en escala logarítmica. Con alfa fijo 0,05: 13 iteraciones.',1],
['Con alfa 0,01, pasos más pequeños: 65 iteraciones. Más seguro, pero más lento.',2],
['Con la búsqueda lineal exacta: solo 2.',3,'happy'],
['Y con Armijo por retroceso, que empieza en alfa igual a 1 y divide entre 2 hasta cumplir la condición, siempre acepta 0,0625, que también cumple la curvatura con gamma dos igual a 0,9. Pero está casi en el límite de estabilidad, 0,064, así que zigzaguea mucho: 80 iteraciones. Las condiciones de Wolfe garantizan convergencia, no rapidez.',4,'warn']]);
L('t1','Tarea 1 · Resultado','El modelo encontrado',{viz:'fitfinal',eq:[['y=0.8135\\,x_2+0.0987\\quad(\\alpha=0.05,\\;13\\text{ it.})',1],['y=\\tfrac56x_2\\approx0.8333\\,x_2\\quad(\\text{mínimo exacto de }L)',2]]},[
['La línea azul es el modelo del gradiente con alfa 0,05: y igual a 0,8135 x2 más 0,0987. Pasa a menos de 0,1 de cada punto.',1,'point'],
['La línea roja discontinua es el mínimo exacto de L: y igual a cinco sextos de x2, unos 0,8333 x2. Casi se superponen.',2]]);
L('t1','Tarea 1 · Discusión','Lo que hay que analizar',{viz:'w1flat',bl:[['a) La tolerancia detiene el algoritmo antes del mínimo exacto: con tolerancia 10⁻⁶ converge a w₂ = 0,833333, b ≈ 0.',1],['b) w₁ no se puede identificar: ∂L/∂w₁ = 0 y la hessiana tiene un autovalor nulo. No es error del método: faltan datos con x₁ ≠ 0.',2],['c) Lentitud cerca del mínimo: el gradiente se acerca a cero, como advierte Yang.',3],['d) Validez del modelo lineal: los tres puntos son colineales; harían falta más mediciones en [0, 10] para descartar no linealidades.',4]]},[
['Cuatro ideas para la discusión. Primera: la tolerancia detiene el algoritmo antes del mínimo exacto. Con 0,1 paramos en 0,8135; si la bajamos a 10 a la menos 6, llega a 0,833333 con b casi cero. Hay muchas soluciones aceptables, pero el mínimo de mínimos cuadrados es único en w2 y b.',1],
['Segunda: w1 no se puede identificar. Mira el mapa: moverse en la dirección de w1 no cambia nada, es una dirección plana, con autovalor cero. No es culpa del método: los datos no tienen información de x1. Haría falta al menos una medición con x1 distinto de cero, como 3, 0 o 5, 5.',2,'warn'],
['Tercera: la lentitud cerca del mínimo. Al principio el error baja mucho y al final poco, porque el gradiente se acerca a cero: justo lo que describe Yang.',3],
['Cuarta: la validez del modelo lineal. Los tres puntos son colineales, así que el ajuste lineal es exacto, pero con solo tres muestras no podemos descartar algo no lineal en otras zonas del intervalo de cero a diez.',4]]);
L('t1','Tarea 1 · Conclusión','La función de la caja',{eq:[['y(x_1,x_2)\\approx0.8333\\,x_2=\\frac{5x_2}{6}',1,'el aporte de x₁ queda indeterminado por falta de datos'],['w_1+w_2=8.333\\;?',3,'si se leyera x₁ = x₂ = 0,3 y 0,6, solo se identificaría la suma']]},[
['Conclusión: según los datos y el gradiente descendente, la caja se comporta como y igual a 0,8333 por x2, es decir, cinco sextos de x2. El aporte de x1 queda indeterminado por falta de datos.',1,'happy'],
['El paso fijo de 0,05 cumple el criterio en 13 iteraciones; la búsqueda lineal exacta en 2; y Armijo con Wolfe converge, pero en 80. La elección alfa menor que 2 entre lambda máxima se justificó con la hessiana.',2],
['Una nota: si los datos se leyeran de otra forma, con x1 igual a x2, el procedimiento sería idéntico, pero solo podríamos identificar la suma w1 más w2. La indeterminación seguiría.',3]]);
L('t1','Tarea 1 · Código','El algoritmo en Python',{code2:['import numpy as np\n\n# Datos: columnas (x1, x2) y salida medida chi\nX   = np.array([[0, 0], [0, 3], [0, 6]], dtype=float)\nchi = np.array([0, 2.5, 5])\nN   = len(chi)\n\nw, b  = np.zeros(2), 0.0      # valor inicial\nalpha = 0.05                  # alpha < 2/lambda_max = 0.064\ntol   = 0.1                   # criterio |y_i - chi_i| < 0.1\n\nk = 0\nwhile True:\n    y = X @ w + b             # predicción del modelo\n    e = y - chi               # error por muestra\n    if np.all(np.abs(e) < tol):\n        break\n    grad_w = (2/N) * X.T @ e  # dL/dw1, dL/dw2\n    grad_b = (2/N) * e.sum()  # dL/db\n    w -= alpha * grad_w       # paso en dirección -gradiente\n    b -= alpha * grad_b\n    k += 1\n\nprint(f"Iteraciones: {k}")\nprint(f"y = {w[0]:.4f}*x1 + {w[1]:.4f}*x2 + {b:.4f}")',1],bl:[['X @ w + b: el modelo para las tres muestras a la vez.',1],['e = y − chi: los errores.',2],['np.all(|e| < 0,1): el criterio de parada.',3],['(2/N)·Xᵀe y (2/N)·Σe: el gradiente.',4],['w −= α·grad: el paso de descenso.',5]]},[
['El código hace exactamente lo que hicimos a mano. Primero, los datos y los valores iniciales: perillas en cero, alfa 0,05 y tolerancia 0,1.',1],
['En el bucle: calcula la predicción para las tres muestras a la vez y los errores.',2],
['Si todos los errores son menores que 0,1, se detiene.',3],
['Si no, calcula el gradiente con las fórmulas del paso 3…',4,'point'],
['…y da el paso en la dirección contraria. Al terminar imprime 13 iteraciones y el modelo encontrado.',5]]);
L('t1','Tarea 1 · Para tu cuaderno','Resumen para resolver el ejercicio en clase',{bl:[['1. Datos: (x1, x2) → χ: (0,0)→0; (0,3)→2,5; (0,6)→5. Criterio |yᵢ − χᵢ| < 0,1.',1],['2. Modelo: y = w1x1 + w2x2 + b. Incógnitas: w = (w1, w2, b).',2],['3. Objetivo: L = (1/N)Σ(yᵢ − χᵢ)², N = 3 (cuadrado: derivable).',3],['4. Gradiente: ∂L/∂w1 = (2/N)Σeᵢx1,ᵢ = 0; ∂L/∂w2 = (2/N)Σeᵢx2,ᵢ; ∂L/∂b = (2/N)Σeᵢ.',4],['5. Paso: H = [[0,0,0],[0,30,6],[0,6,2]], λ ≈ 0; 0,768; 31,23 → α < 2/31,23 ≈ 0,064 → α = 0,05.',5],['6. Iteración: w ← w − α∇L. k=0: ∇=(−25, −5) → (1,25; 0,25). k=1: ∇=(14, 3) → (0,55; 0,10).',6],['7. Resultado: k = 13 → y = 0,8135x2 + 0,0987 (máx |e| = 0,0987).',7],['8. Búsqueda exacta α* = gᵀg/gᵀHg → 2 it. (0,8325; 0). α = 0,01 → 65 it. Armijo → 80 it.',8],['9. Conclusión: y ≈ 0,8333x2 = 5x2/6; w1 indeterminado porque x1 = 0 en todos los datos.',9]]},[
['Ahora, lo que debes copiar en tu cuaderno para resolverlo en clase. Uno: los datos y el criterio, error menor que 0,1.',1],
['Dos: el modelo, y igual a w1 x1 más w2 x2 más b, con las perillas como incógnitas.',2],
['Tres: la función objetivo, el error cuadrático medio, al cuadrado porque es derivable.',3],
['Cuatro: las tres derivadas, y que la de w1 es cero porque x1 siempre es cero.',4,'warn'],
['Cinco: la hessiana, sus autovalores y la regla alfa menor que 2 entre lambda máxima, unos 0,064; por eso alfa igual a 0,05.',5,'point'],
['Seis: la iteración, w menos alfa por el gradiente, con las dos primeras vueltas a mano.',6],
['Siete: el resultado tras 13 iteraciones, y igual a 0,8135 x2 más 0,0987.',7],
['Ocho: la comparación: búsqueda exacta en 2, alfa 0,01 en 65, y Armijo en 80.',8],
['Y nueve: la conclusión, y aproximadamente cinco sextos de x2, con w1 indeterminado por falta de datos. ¡Con esto puedes resolverlo y explicarlo en clase!',9,'happy']]);
/* Preguntas de control de la tarea */
CK('Leer bien la tabla','¿Por qué no podremos saber cuánto influye x1?',['Porque el método es malo','Porque x1 vale 0 en todas las muestras','Porque x1 es negativo','Porque hay demasiados datos'],1,'Si x1 nunca cambia, los datos no contienen información sobre su efecto.');
CK('El modelo: tres perillas','En el modelo y = w1x1 + w2x2 + b, ¿qué son las incógnitas que optimizamos?',['x1 y x2','Los parámetros w1, w2 y b','La salida χ','El tamaño de paso α'],1,'Las entradas son datos; lo que ajustamos son los parámetros, las perillas.');
CK('¿Qué tan mal lo hacemos? La función objetivo','¿Por qué se usa el error al cuadrado y no el valor absoluto?',['Porque da números más grandes','Porque el cuadrado es suave y derivable; |e| no es derivable en 0','Porque lo exige Yang','Porque el absoluto siempre es cero'],1,'El gradiente del cuadrado es lineal en el error; el valor absoluto tiene un pico en cero.');
CK('¿De qué tamaño es el paso?','¿Por qué α debe ser menor que 0,064?',['Porque es un número bonito','Porque con α > 2/λmáx el error crece en cada paso y diverge','Porque así lo dice el enunciado','Porque L es lineal'],1,'Cada paso multiplica el error por (1 − αλ); para converger |1 − αλ| < 1, es decir α < 2/31,23.');
CK('Iteración 0, a mano','Partiendo de w2 = b = 0 con α = 0,05, ¿cuánto vale w2 después del primer paso?',['0,25','1,25','−1,25','0,55'],1,'∂L/∂w2 = −25, así que w2 = 0 − 0,05·(−25) = 1,25.');
CK('Búsqueda lineal exacta: el paso perfecto','¿En cuántas iteraciones cumple el criterio la búsqueda lineal exacta?',['1','2','13','80'],1,'Con α* = gᵀg/gᵀHg llega en 2 iteraciones a w2 = 0,8325 y b ≈ 0.');
CK('Lo que hay que analizar','¿Qué haría falta para identificar w1?',['Usar un α más pequeño','Al menos una medición con x1 ≠ 0','Más iteraciones','Usar Armijo'],1,'El problema son los datos, no el método: con x1 = 0 siempre, ∂L/∂w1 = 0.');
/* Cuaderno y tarjetas */
NOTES.t1={t:'Tarea 1 · Identificación de una función desconocida',items:[
['def','Datos (x1, x2) → χ: (0, 0) → 0; (0, 3) → 2,5; (0, 6) → 5. Criterio: |yᵢ − χᵢ| < 0,1 en toda muestra. Método: gradiente descendente (Yang, cap. 4).'],
['form','Modelo: y = w1x1 + w2x2 + b; incógnitas w = (w1, w2, b).','y=w_1x_1+w_2x_2+b'],
['form','Objetivo (ECM): L = (1/N)Σ(yᵢ − χᵢ)², N = 3. Se usa el cuadrado porque es derivable.','L=\\frac1N\\sum(y_i-\\chi_i)^2'],
['form','Gradiente: ∂L/∂w1 = (2/N)Σeᵢx1,ᵢ = 0; ∂L/∂w2 = (2/N)Σeᵢx2,ᵢ; ∂L/∂b = (2/N)Σeᵢ, con eᵢ = yᵢ − χᵢ.','\\frac{\\partial L}{\\partial w_2}=\\frac2N\\sum e_ix_{2,i}'],
['form','Hessiana H = (2/N)AᵀA = [[0,0,0],[0,30,6],[0,6,2]]; λ ≈ 0; 0,768; 31,23 → α < 2/λmáx ≈ 0,064 → α = 0,05.','\\alpha<\\frac{2}{\\lambda_{\\max}}\\approx0.064'],
['ej','Iteración 0: e = (0; −2,5; −5); ∂L/∂w2 = −25; ∂L/∂b = −5 → w2 = 1,25; b = 0,25. Iteración 1: ∂L/∂w2 = 14; ∂L/∂b = 3 → w2 = 0,55; b = 0,10.'],
['ej','Resultado α = 0,05: k = 13, y = 0,8135x2 + 0,0987 (máx |e| = 0,0987).'],
['form','Búsqueda lineal exacta: α* = gᵀg / gᵀHg → 2 iteraciones (w2 = 0,8325; b ≈ 0). α = 0,01 → 65 it. Armijo (γ1 = 10⁻⁴, α = 0,0625) → 80 it.','\\alpha_k^*=\\frac{\\mathbf{g}_k^T\\mathbf{g}_k}{\\mathbf{g}_k^T\\mathbf{H}\\mathbf{g}_k}'],
['def','Conclusión: y ≈ 0,8333x2 = 5x2/6. w1 no se puede identificar (x1 = 0 en todos los datos → ∂L/∂w1 = 0, autovalor nulo).'],
['int','«No es una falla del método: los datos no tienen información de x1. Con una medición como (3, 0) o (5, 5) se podría identificar w1.»'],
['int','«Elegir bien α es tan importante como la dirección: con paso exacto bastan 2 iteraciones; con Armijo, 80.»']]};
FC.push(['t1','Tarea 1: ¿qué modelo se propone y por qué?','y = w1x1 + w2x2 + b, porque los datos son colineales y el ECM resulta cuadrático y convexo (un solo mínimo).'],
['t1','Tarea 1: ¿por qué α = 0,05?','Porque la hessiana tiene λmáx ≈ 31,23 y la convergencia exige α < 2/λmáx ≈ 0,064.'],
['t1','Tarea 1: ¿cuántas iteraciones necesita cada estrategia?','α = 0,05: 13; α = 0,01: 65; búsqueda exacta: 2; Armijo: 80.'],
['t1','Tarea 1: ¿cuál es la función encontrada?','y ≈ 0,8135x2 + 0,0987 con α = 0,05; el mínimo exacto es y = 5x2/6 ≈ 0,8333x2.'],
['t1','Tarea 1: ¿por qué w1 queda indeterminado?','Porque x1 = 0 en todas las muestras: ∂L/∂w1 = 0 y la hessiana tiene un autovalor nulo.'],
['t1','Tarea 1: calcula ∂L/∂w2 en la iteración 0.','(2/3)[0·0 + (−2,5)(3) + (−5)(6)] = (2/3)(−37,5) = −25.']);
QS.push({t:'tarea',q:'Tarea 1: ¿cuál es el autovalor máximo de la hessiana?',o:['0,768','2','31,23','41'],a:2,w:'H = [[0,0,0],[0,30,6],[0,6,2]] tiene λ ≈ 0; 0,768; 31,23.'},
{t:'tarea',q:'Tarea 1: con α = 0,05, ¿en qué iteración se cumple |e| < 0,1?',o:['2','13','65','80'],a:1,w:'En k = 13: w2 = 0,8135, b = 0,0987.'},
{t:'tarea',q:'Tarea 1: después de la iteración 1, ¿cuánto valen w2 y b?',o:['1,25 y 0,25','0,55 y 0,10','0,8135 y 0,0987','0,8325 y 0'],a:1,w:'w2 = 1,25 − 0,05·14 = 0,55; b = 0,25 − 0,05·3 = 0,10.'},
{t:'tarea',q:'Tarea 1: ¿por qué Armijo tarda 80 iteraciones?',o:['Porque no converge','Porque acepta α = 0,0625, casi en el límite de estabilidad 0,064, y zigzaguea','Porque usa la hessiana','Porque el modelo es no lineal'],a:1,w:'Wolfe garantiza convergencia, no rapidez.'});
TOP.tarea='Tarea 1';

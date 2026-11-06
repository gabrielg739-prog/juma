/* ===== CAPÍTULO 1: BREVE HISTORIA DE LA OPTIMIZACIÓN (págs. 3-13) ===== */
chapter('inicio','Inicio');chapter('c1','Cap. 1: introducción');chapter('c1a','Cap. 1.1: antes de 1900');chapter('c1b','Cap. 1.2: siglo XX');chapter('c1c','Cap. 1.3: heurísticas y metaheurísticas');
T('inicio','Hola, soy Gene','Ingeniería de optimización, de Xin-She Yang · capítulos 1, 2 y 4',[
['¡Hola! Soy Gene. Soy una red neuronal: un sistema que aprende ajustando sus pesos, o sea, optimizando. Por eso este tema me toca de cerca.','','happy'],
['Vamos a recorrer, sin saltarnos nada, los capítulos 1, 2 y 4 del libro Ingeniería de optimización, de Xin-She Yang.'],
['El capítulo 1 cuenta la historia de la optimización. El capítulo 2 explica cómo se plantea y se clasifica un problema de ingeniería. Y el capítulo 4 presenta los métodos clásicos para resolverlo.','','point'],
['Cuando aparezca un científico, verás su retrato recreado. Cuando aparezca una ecuación, la construiremos paso a paso. Y al final tienes resúmenes, puntos clave y todos los ejercicios resueltos.'],
['Puedes pausar, saltar de escena o elegir un tema en el menú de abajo. Empezamos.']]);
T('c1','Capítulo 1','Breve historia de la optimización',[['Capítulo 1: breve historia de la optimización.']]);
L('c1','Capítulo 1 · Introducción','La optimización está en todas partes','intro',[
['La optimización está presente en todas partes: desde el diseño de ingeniería hasta los mercados financieros, desde nuestras actividades diarias hasta la planificación de las vacaciones, y desde las ciencias de la computación hasta las aplicaciones industriales.',0],
['Siempre intentamos maximizar o minimizar algo. Fíjate en esta curva: buscar su punto más bajo es minimizar.',1,'point'],
['Una organización quiere maximizar sus beneficios, minimizar sus costes y maximizar su rendimiento.',2],
['Incluso al planificar unas vacaciones queremos maximizar el disfrute con el menor coste posible, o, idealmente, sin coste alguno.',2],
['De hecho, buscamos constantemente las soluciones óptimas para cada problema que encontramos, aunque no siempre somos capaces de encontrarlas.',3]]);
L('c1','Capítulo 1 · Introducción','Tan antigua como la humanidad',{bl:[['El principio del mínimo esfuerzo explica muchos comportamientos humanos.',1],['La distancia más corta entre dos puntos de un plano es una línea recta… pero demostrarlo formalmente requiere el cálculo de variaciones.',2],['Muchos fenómenos físicos obedecen el principio de mínima acción.',3],['La luz sigue el principio de Fermat: viaja en el menor tiempo posible, y de ahí sale la ley de Snell.',4],['Toda la mecánica analítica se basa en el principio de mínima acción.',5]]},[
['No es exagerado decir que buscar soluciones a problemas de optimización, de forma intencionada o inconsciente, es tan antiguo como la propia historia de la humanidad.',0],
['Por ejemplo, el principio del mínimo esfuerzo suele explicar muchos comportamientos humanos.',1],
['Sabemos que la distancia más corta entre dos puntos cualesquiera de un plano es una línea recta. Sin embargo, para demostrar formalmente que ese segmento es, efectivamente, el más corto, a menudo hacen falta matemáticas complejas, como el cálculo de variaciones.',2],
['De hecho, muchos fenómenos físicos se rigen por el llamado principio de mínima acción, o por alguna de sus variantes.',3],
['Por ejemplo, la luz se propaga obedeciendo el principio de Fermat: viaja de un medio a otro en el menor tiempo posible, y eso da lugar a la ley de Snell.',4,'point'],
['Toda la mecánica analítica se basa en este principio de mínima acción.',5]]);
/* 1.1 */
T('c1a','1.1 Antes de 1900','De Euclides a Cauchy',[['Sección 1.1: antes de 1900. El estudio de los problemas de optimización es tan antiguo como la propia ciencia.']]);
L('c1a','1.1 · Euclides, hacia el 300 a. C.','El cuadrado de mayor área',{viz:'euclid',who:['euclides']},[
['Se sabe que los matemáticos de la antigua Grecia resolvieron muchos problemas de optimización.',0],
['Por ejemplo, Euclides, hacia el año 300 antes de Cristo, demostró que, entre todos los rectángulos posibles con la misma longitud total de sus cuatro lados, el cuadrado es el que tiene mayor área.',1],
['Mira el experimento: el perímetro está fijo en 20. Si el rectángulo es muy alargado, el área es pequeña.',1],
['El área máxima aparece cuando los cuatro lados son iguales: un cuadrado de 5 por 5, con área 25.',2,'point'],
['La gráfica de la derecha muestra el área como función de la base: w por 10 menos w. Es una parábola, y su punto más alto está justo en w igual a 5. Este es el ejercicio 1.3 del capítulo; lo demostramos completo al final.',3]]);
L('c1a','1.1 · Herón, hacia el 100 a. C.','El problema de Herón',{viz:'heron',who:['heron']},[
['Más tarde, Herón, hacia el año 100 antes de Cristo, sugirió que la distancia entre dos puntos a lo largo de un camino reflejado en un espejo es la más corta cuando la luz se refleja cumpliendo cierta simetría.',0],
['La luz sale de P, toca el espejo en un punto A y llega a Q. Movemos A y medimos la longitud total.',1],
['El truco es reflejar Q por debajo del espejo. El camino más corto hasta ese reflejo es una recta, y esa recta corta el espejo justo en el punto óptimo.',2,'point'],
['En ese punto, el ángulo de incidencia es igual al ángulo de reflexión. Es un problema de optimización muy conocido, llamado el problema de Herón, descrito por primera vez en su obra Catóptrica, o Sobre los espejos.',3]]);
L('c1a','1.1 · Kepler, 1613','El problema del matrimonio, o del secretario',{viz:'kepler',who:['kepler','gardner']},[
['El célebre astrónomo alemán Johannes Kepler es famoso sobre todo por descubrir sus tres leyes del movimiento planetario.',0],
['Sin embargo, en 1613 encontró una solución óptima al llamado problema del matrimonio, o problema del secretario, cuando empezó a buscar a su segunda esposa.',1],
['Describió su método en una carta personal fechada el 23 de octubre de 1613, dirigida al barón Strahlendorf. En ella incluía el balance de virtudes e inconvenientes de cada candidata, su dote, sus dudas y los consejos de sus amigos.',2],
['De las once candidatas entrevistadas, Kepler eligió a la quinta, aunque un amigo le sugirió elegir a la cuarta. Esto podría implicar que Kepler intentaba optimizar algún tipo de función de utilidad.',3,'point'],
['Martin Gardner presentó formalmente este problema en febrero de 1960, en su columna de juegos matemáticos de la revista Scientific American. Desde entonces se ha convertido en un campo de la optimización probabilística, como los problemas de parada óptima.',4]]);
L('c1a','1.1 · Snell, Huygens y Descartes','La ley de la refracción',{viz:'snell',who:['snell','huygens','descartes']},[
['Willebrord van Royen Snell descubrió la ley de la refracción en 1621, pero no la publicó. Más tarde, Christiaan Huygens mencionó los resultados de Snell en su obra Dióptrica, en 1703.',0],
['La ley fue redescubierta de forma independiente por René Descartes, que la publicó en su tratado Discurso del método, en 1637.',1],
['La luz va del punto A, en el aire, al punto B, en el agua, donde viaja más lento. Movemos el punto donde cruza la superficie y medimos el tiempo total.',1],
['El tiempo mínimo no está sobre la línea recta: a la luz le conviene recorrer más camino en el aire, donde es rápida. Por eso se dobla.',2,'point'],
['Ese quiebre cumple la ley de Snell: sen θ1 / v1 = sen θ2 / v2.',3]]);
L('c1a','1.1 · Fermat, 1657','El principio de Fermat',{who:['fermat','descartes'],big:1,eq:[['\\frac{\\sin\\theta_1}{v_1}=\\frac{\\sin\\theta_2}{v_2}',3,'ley de Snell, deducida del menor tiempo']],bl:[['Unos 20 años después, los alumnos de Descartes contactan a Fermat para recopilar su correspondencia.',1],['En 1657 Fermat reexamina la explicación de Descartes, que le parecía insatisfactoria.',2],['Deduce los resultados de Snell y Descartes de un principio más fundamental: la luz siempre se propaga en el menor tiempo posible.',3],['Hoy se llama principio de Fermat y sentó las bases de la óptica moderna.',4]]},[
['Unos veinte años más tarde, cuando los alumnos de Descartes contactaron a Pierre de Fermat para recopilar su correspondencia con Descartes…',1],
['Fermat volvió a examinar, en 1657, su discusión sobre la descripción insatisfactoria que Descartes había dado de la refracción de la luz.',2],
['Y dedujo los resultados de Snell y de Descartes a partir de un principio más fundamental: la luz siempre se propaga en el menor tiempo posible, en cualquier medio.',3,'point'],
['Este principio de la luz se conoce hoy como el principio de Fermat, y sentó las bases de la óptica moderna.',4]]);
L('c1a','1.1 · Newton y Galileo','El cuerpo de mínima resistencia',{who:['newton','galileo'],big:1,bl:[['1685: Newton plantea el problema de la forma del cuerpo de mínima resistencia.',1],['1687: lo resuelve en sus Principia Mathematica. Hoy se considera un problema del cálculo de variaciones.',2],['Objetivo: la forma de un cuerpo simétrico de revolución que minimice la resistencia al moverse en un fluido.',3],['Después dedujo la ley de resistencia de los cuerpos. Galileo había planteado un problema parecido en 1638, en sus Discursos.',4]]},[
['En sus Principia Mathematica, publicados en 1687, Sir Isaac Newton resolvió el problema de la forma del cuerpo de mínima resistencia, que él mismo había planteado en 1685.',1],
['Fue un problema pionero en optimización, y hoy se considera un problema del cálculo de variaciones.',2],
['El objetivo principal era hallar la forma de un cuerpo simétrico de revolución que minimizara la resistencia al moverse en un fluido.',3,'point'],
['Posteriormente, Newton dedujo la ley de resistencia de los cuerpos. Curiosamente, Galileo Galilei había planteado de forma independiente un problema similar en 1638, en sus Discursos.',4]]);
L('c1a','1.1 · Bernoulli, 1696','La braquistócrona',{viz:'brach',who:['bernoulli','newton']},[
['En junio de 1696, Johann Bernoulli logró avances significativos en el cálculo. En un artículo publicado en Acta Eruditorum, retó a todos los matemáticos del mundo:',0],
['encontrar la forma, o curva, que une dos puntos a distinta altura de modo que un cuerpo caiga por ella en el menor tiempo posible por efecto de la gravedad. Es decir, la línea de descenso más rápido. Bernoulli ya conocía la solución.',1],
['La recta es el camino más corto, pero no el más rápido. Mira la carrera.',2,'point'],
['Gana la curva de abajo: baja fuerte al principio, gana velocidad pronto y eso compensa el recorrido más largo.',3,'happy'],
['El 29 de enero de 1697, Newton recibió el reto al llegar a casa a las cuatro de la tarde, y no durmió hasta resolverlo, hacia las cuatro de la madrugada. Ese mismo día envió su solución.',3]]);
L('c1a','1.1 · Bernoulli, 1696','La cicloide y el cálculo de variaciones',{who:['newton','euler','lagrange'],big:1,bl:[['Newton tardó menos de 12 horas; era director de la Casa de la Moneda desde el 19 de marzo de 1696.',1],['Algunos dijeron que un genio así debía resolverlo en media hora: ¿la primera prueba de que el trabajo administrativo frena a una persona?',2],['La solución es parte de una cicloide. Hoy se llama problema de la braquistócrona.',3],['Inspiró a Euler y a Lagrange a formular la teoría general del cálculo de variaciones.',4]]},[
['Aunque Newton lo resolvió en menos de doce horas, como se había convertido en director de la Casa de la Moneda Real el 19 de marzo de 1696, algunos sugirieron que un genio de su calibre debería haberlo resuelto en media hora.',1],
['Otros afirmaron, en broma, que este fue el primer indicio de que el exceso de trabajo administrativo ralentiza el progreso de una persona.',2],
['La solución, tal como la conocemos hoy, es parte de una cicloide. Este descenso más rápido se conoce como el problema de la braquistócrona.',3,'point'],
['Y fue lo que inspiró a Euler y a Lagrange a formular la teoría general del cálculo de variaciones.',4]]);
L('c1a','1.1 · Maupertuis, 1746','El principio de mínima acción',{who:['maupertuis'],big:1,eq:[['S=\\int_{t_1}^{t_2} L\\,dt\\;\\rightarrow\\;\\text{estacionaria}',2,'acción: integral de un funcional (forma moderna)']],bl:[['Propuesto para unificar diversas leyes del movimiento físico y explicar todos los fenómenos.',1],['En lenguaje moderno: un principio variacional de acción estacionaria.',2],['Papel central en la mecánica clásica de Lagrange y de Hamilton; importante en matemáticas y física.',3]]},[
['En 1746, Pierre-Louis de Maupertuis propuso el principio de mínima acción para unificar diversas leyes del movimiento físico y explicar con él todos los fenómenos.',1],
['En terminología moderna, es un principio variacional de acción estacionaria, expresado como la integral de un funcional, dentro del marco del cálculo de variaciones.',2,'point'],
['Desempeña un papel central en la mecánica clásica lagrangiana y hamiltoniana, y es también un principio importante en matemáticas y en física.',3]]);
L('c1a','1.1 · Monge, 1781','El problema del transporte',{viz:'transport',who:['monge','kantorovich']},[
['En 1781, Gaspard Monge, un ingeniero civil francés, investigó el problema del transporte: cómo optimizar el transporte y la asignación de recursos conociendo la distribución espacial inicial y la final.',0],
['Imagina montones de tierra que hay que llevar a varios huecos. ¿Qué asignación minimiza el trabajo total?',1,'point'],
['Cada flecha es un envío, y su coste depende de la distancia.',2],
['En 1942, Leonid Kantorovich demostró que este problema de optimización combinatoria es, de hecho, un caso de programación lineal.',3]]);
L('c1a','1.1 · Gauss, Legendre y Adrain','Los mínimos cuadrados',{viz:'lsq',who:['gauss','legendre','adrain']},[
['Hacia 1801, Friedrich Gauss afirmó haber usado el método de los mínimos cuadrados para predecir la posición orbital del asteroide Ceres, aunque su versión, con una base matemática más rigurosa, se publicó más tarde, en 1809.',0],
['La idea: tenemos datos con error y buscamos la recta que mejor los representa. Cada línea roja es un residuo.',1],
['Elevamos cada residuo al cuadrado y los sumamos. La mejor recta es la que hace mínima esa suma.',2],
['Mira cómo baja la suma mientras la recta gira hasta su sitio.',3,'point'],
['En 1805, Adrien Legendre fue el primero en describir el método, en un apéndice de su libro Nuevo método para determinar las órbitas de los cometas, y en 1806 lo usó para ajustar curvas.',3]]);
L('c1a','1.1 · Gauss, Legendre y Adrain','Una disputa por la prioridad',{who:['gauss','legendre','adrain'],big:1,bl:[['Gauss afirmó llevar más de veinte años usando el método.',1],['Dijo haber sentado sus bases en 1795: hubo disputas acaloradas con Legendre.',2],['1808: Robert Adrain lo publica sin conocer a Legendre, estudiando la incertidumbre y los errores de las observaciones.',3]]},[
['Gauss afirmó más tarde que llevaba más de veinte años usando este método…',1],
['…y que había sentado las bases del análisis de mínimos cuadrados en 1795. Esto provocó disputas acaloradas con Legendre.',2,'warn'],
['En 1808, Robert Adrain, sin conocer el trabajo de Legendre, publicó el método de mínimos cuadrados al estudiar la incertidumbre y los errores al hacer observaciones, sin usar la misma terminología que Legendre.',3]]);
L('c1a','1.1 · Ricardo, 1815','Rendimientos decrecientes',{viz:'ricardo',who:['ricardo']},[
['En 1815, David Ricardo propuso la ley de los rendimientos decrecientes en el cultivo de la tierra, que puede aplicarse a numerosas actividades.',0],
['Por ejemplo, la productividad de una parcela o de una fábrica solo aumenta marginalmente con cada incremento adicional de insumos. Mira la curva: cada escalón añade menos.',1,'point'],
['Esta ley también se llama ley del coste de oportunidad creciente.',2],
['Establece que hay una relación fundamental entre la oportunidad y la escasez de recursos, y exige que los recursos escasos se usen de forma eficiente.',3]]);
L('c1a','1.1 · Cauchy, 1847','El origen del método del gradiente',{viz:'descent',who:['cauchy']},[
['En 1847, en una breve nota, Augustin-Louis Cauchy propuso un método general para resolver sistemas de ecuaciones de forma iterativa.',0],
['Esto conduce esencialmente a dos métodos iterativos de minimización, hoy llamados método del gradiente y descenso más pronunciado, para ciertas funciones de más de una variable.',1,'point'],
['La idea es la que ves: desde un punto, avanzar en la dirección en que la función baja más rápido, y repetir.',3],
['Veremos este método con todo detalle, con números, en el capítulo 4.',5]]);
/* 1.2 */
T('c1b','1.2 El siglo XX','Convexidad, viajantes, programación lineal y dinámica',[['Sección 1.2: el siglo veinte.']]);
L('c1b','1.2 · Jensen, 1906','La convexidad',{viz:'convex',who:['jensen']},[
['En 1906, el matemático danés Johan Jensen introdujo el concepto de convexidad y dedujo una desigualdad, hoy llamada desigualdad de Jensen, importante en la optimización convexa y en otras áreas como la economía.',0],
['Una función es convexa si la cuerda entre dos de sus puntos queda siempre por encima de la curva.',1,'point'],
['A la derecha, una función que no es convexa: la cuerda cruza la curva y aparecen varios valles.',2],
['La optimización convexa es una clase especial pero muy importante, porque cualquier solución óptima encontrada está garantizada como óptima global.',3,'happy'],
['Muchos problemas pueden reformularse como convexos, por eso tiene numerosas aplicaciones: sistemas de control, ajuste de datos y modelado, diseño óptimo, procesamiento de señales, finanzas matemáticas y otras.',3]]);
L('c1b','1.2 · Euler, Kirkman y Hamilton','Recorridos por grafos',{viz:'knight',who:['euler','kirkman','hamilton']},[
['Ya en 1766, Leonhard Euler estudió el problema del recorrido del caballo: mover un caballo de ajedrez de modo que pase por todas las casillas exactamente una vez.',1,'point'],
['Thomas Kirkman publicó un trabajo sobre cómo encontrar un recorrido que pase por cada vértice una y solo una vez en el grafo de un poliedro.',2],
['Y en 1856, Sir William Rowan Hamilton popularizó su recorrido icosiano, un juego sobre los vértices de un dodecaedro.',3]]);
L('c1b','1.2 · Menger, 1930','El problema del viajante',{viz:'tsp',who:['menger']},[
['En febrero de 1930, Karl Menger planteó el problema del mensajero en un coloquio matemático en Viena, porque es un problema que enfrentan a menudo los carteros y los viajeros. Su trabajo se publicó en 1932.',0],
['La tarea es encontrar el camino más corto que conecte un número finito de puntos, o ciudades, cuyas distancias por pares se conocen.',1],
['En general, la regla simple de ir siempre al punto más cercano no da el camino más corto. Mira la ruta que produce.',2],
['Ahora la ruta óptima: es más corta.',3,'point'],
['Aunque el problema se puede resolver con un número finito de permutaciones, no existe un algoritmo eficiente para hallar la solución. Hoy se conoce como problema del viajante, relacionado con el enrutamiento en redes, la asignación de recursos, la programación de tareas y la investigación operativa.',3],
['Ya en 1832, un manual para viajantes describía un recorrido por 45 ciudades alemanas con una ruta de 1248 kilómetros, aunque los fundamentos matemáticos exactos son bastante oscuros y pudieron existir antes de 1930.',3]]);
L('c1b','1.2 · Hancock, 1917 · Kantorovich, 1939','Primer libro y primera programación lineal',{who:['hancock','kantorovich','koopmans'],big:1,bl:[['1917: Harris Hancock publica el primer libro sobre optimización, «Teoría de mínimos y máximos».',1],['1939: Kantorovich desarrolla el primer algoritmo de programación lineal y lo aplica a la economía.',2],['Formula el problema de producción de la planificación óptima y métodos eficaces para resolverlo.',3],['1975: comparte el Premio Nobel con Tjalling Koopmans.',4]]},[
['Curiosamente, Harris Hancock publicó en 1917 el primer libro sobre optimización: Teoría de mínimos y máximos.',1],
['En 1939, Leonid Kantorovich fue el primero en desarrollar un algoritmo para la programación lineal y en aplicarlo a la economía.',2],
['Formuló el problema de producción de la planificación óptima y métodos eficaces para hallar sus soluciones mediante programación lineal.',3],
['Por este trabajo compartió el Premio Nobel con Tjalling Koopmans en 1975.',4,'happy']]);
L('c1b','1.2 · Dantzig, 1947','El método simplex',{who:['dantzig','kantorovich','koopmans','dorfman'],bl:[['Dorfman (1984): la programación lineal se descubrió tres veces, de forma independiente, entre 1939 y 1947.',1],['Primero Kantorovich (ruso), luego Koopmans (neerlandés) y, en 1947, Dantzig (estadounidense).',2],['El simplex resuelve problemas de decisión de políticas óptimas de gran complejidad.',3],['Ejemplo clásico: la dieta óptima, con 9 ecuaciones y 77 incógnitas, resuelta con calculadoras de escritorio.',4]]},[
['El siguiente paso importante fue que George Dantzig inventó en 1947 un método sencillo para resolver problemas de programación lineal a gran escala.',0],
['Dorfman escribió en un artículo de 1984 que la programación lineal se descubrió tres veces, de forma independiente, entre 1939 y 1947, cada vez de forma ligeramente distinta.',1],
['El primer descubrimiento fue del matemático ruso Kantorovich, luego del economista neerlandés Koopmans, y el tercero, en 1947, del matemático estadounidense George Dantzig.',2],
['El revolucionario método simplex de Dantzig es capaz de resolver una amplia gama de problemas de decisión de políticas óptimas de gran complejidad.',3,'point'],
['Un ejemplo clásico, uno de los primeros, descrito en el libro de Dantzig de 1963, fue hallar la dieta óptima: un problema con 9 ecuaciones y 77 incógnitas, resuelto con calculadoras de escritorio manuales.',4]]);
L('c1b','1.2 · Karush, Kuhn y Tucker','Las condiciones de optimalidad',{who:['karush','kuhn','tucker'],big:1,bl:[['1951: Kuhn y Tucker estudian la optimización no lineal y reformulan la condición de optimalidad.',1],['Karush había propuesto condiciones similares en 1939, en su tesis de maestría.',2],['Son la generalización de los multiplicadores de Lagrange a desigualdades no lineales.',3],['Hoy: condiciones de Karush-Kuhn-Tucker (KKT), necesarias para que una solución sea óptima en programación no lineal.',4]]},[
['En 1951, Harold Kuhn y Albert Tucker estudiaron el problema de optimización no lineal y reformularon la condición de optimalidad.',1],
['William Karush había propuesto condiciones similares en 1939, en su tesis de maestría.',2],
['De hecho, estas condiciones de optimalidad son la generalización de los multiplicadores de Lagrange a las desigualdades no lineales.',3,'point'],
['Hoy se conocen como condiciones de Karush-Kuhn-Tucker, o simplemente de Kuhn-Tucker, y son condiciones necesarias para que una solución sea óptima en programación no lineal. Las resolveremos en el capítulo 4.',4]]);
L('c1b','1.2 · Bellman, 1957','Programación dinámica',{who:['bellman','vonneumann','morgenstern'],big:1,bl:[['1957: Bellman (Stanford) desarrolla la programación dinámica y el principio de optimalidad, en la RAND Corporation.',1],['Estudiaba procesos de decisión y planificación en múltiples etapas; acuñó el término «programación dinámica».',2],['La idea se remonta a 1944: von Neumann y Morgenstern y los problemas de decisión secuencial.',3],['Von Neumann también hizo aportes importantes a la investigación operativa.',4]]},[
['Posteriormente, en 1957, Richard Bellman, de la Universidad de Stanford, desarrolló la programación dinámica y el principio de optimalidad mientras estudiaba procesos de decisión y planificación en múltiples etapas, durante su estancia en la RAND Corporation.',1],
['También acuñó el término programación dinámica.',2],
['La idea se remonta a 1944, cuando John von Neumann y Oskar Morgenstern estudiaron los problemas de decisión secuencial.',3],
['John von Neumann también hizo contribuciones importantes al desarrollo de la investigación operativa.',4]]);
L('c1b','1.2 · Investigación operativa','De Babbage a la explosión de los años sesenta',{who:['babbage'],big:1,bl:[['1840: Charles Babbage estudia el coste del transporte y la clasificación del correo: quizá la primera investigación operativa.',1],['Avances significativos durante la Segunda Guerra Mundial.',2],['Hoy: redes de comunicación, planificación de proyectos, programación, transporte y gestión.',3],['Desde 1960 la bibliografía crece de forma exponencial; el libro se centra en heurísticas y metaheurísticas.',4]]},[
['Ya en 1840, Charles Babbage estudió el coste del transporte y la clasificación del correo; esta podría ser la investigación más temprana sobre investigación operativa.',1],
['Se lograron avances significativos durante la Segunda Guerra Mundial…',2],
['…y desde entonces se ha ampliado para encontrar soluciones óptimas, o casi óptimas, en una amplia gama de problemas complejos e interdisciplinarios: redes de comunicación, planificación de proyectos, programación, planificación del transporte y gestión.',3],
['A partir de la década de 1960, la bibliografía sobre optimización se multiplicó de forma exponencial; haría falta un libro entero para escribir siquiera una breve historia desde entonces.',4],
['Como este libro trata sobre todo de algoritmos metaheurísticos, la historia se centra a partir de aquí en las heurísticas y metaheurísticas. De hecho, una parte importante de los algoritmos de optimización nuevos son metaheurísticos.',4]]);
/* 1.3 */
T('c1c','1.3 Heurísticas y metaheurísticas','De Turing a las luciérnagas',[['Sección 1.3: heurísticas y metaheurísticas.']]);
L('c1c','1.3 · Definición','¿Qué es una heurística?',{viz:'treasure'},[
['Una heurística es una estrategia de resolución basada en prueba y error para generar soluciones aceptables a un problema complejo en un tiempo razonablemente práctico.',0],
['La complejidad del problema hace imposible buscar todas las soluciones o combinaciones posibles. Probar puntos al azar es lo más básico.',1],
['El objetivo es encontrar soluciones buenas y viables en un plazo aceptable. No hay garantía de encontrar las mejores, y a veces ni siquiera sabemos si un algoritmo funcionará ni por qué.',2,'warn'],
['La idea es tener un algoritmo eficiente y práctico que funcione la mayor parte de las veces y produzca soluciones de buena calidad.',3],
['Entre las soluciones de calidad encontradas, se espera que algunas sean casi óptimas, aunque no hay garantía de dicha optimalidad.',4]]);
L('c1c','1.3 · Turing, 1940','La Bombe y la búsqueda heurística',{viz:'bombe',who:['turing','welchman']},[
['Alan Turing fue probablemente el primero en usar algoritmos heurísticos, durante la Segunda Guerra Mundial, cuando descifraba los códigos alemanes de Enigma en Bletchley Park.',0],
['Allí, Turing y el matemático británico Gordon Welchman diseñaron en 1940 una máquina criptoanalítica electromecánica, la Bombe, para facilitar el descifrado.',1],
['La Bombe usaba un algoritmo heurístico, como lo llamaba Turing, para buscar entre unas 10 elevado a 22 combinaciones posibles la configuración probablemente correcta de un mensaje de Enigma.',2,'point'],
['Turing llamó a su método búsqueda heurística porque, aunque se esperaba que funcionara la mayoría de las veces, no había garantía de encontrar la solución correcta. Aun así, fue un éxito rotundo.',3,'happy']]);
L('c1c','1.3 · Turing, 1945-1948','Maquinaria inteligente',{who:['turing'],big:1,bl:[['1945: Turing entra al Laboratorio Nacional de Física (NPL) del Reino Unido.',1],['Presenta su diseño del Motor de Cálculo Automático (ACE).',2],['1948, informe «Maquinaria inteligente»: inteligencia y aprendizaje automáticos, redes neuronales y algoritmos evolutivos.',3]]},[
['En 1945, Turing fue contratado por el Laboratorio Nacional de Física del Reino Unido, donde presentó su diseño del Motor de Cálculo Automático, el ACE.',1,'point'],
['En un informe del laboratorio de 1948, titulado Maquinaria inteligente, esbozó sus ideas innovadoras sobre la inteligencia y el aprendizaje de las máquinas…',2],
['…las redes neuronales, como yo, y los algoritmos evolutivos, una versión temprana de los algoritmos genéticos.',3,'happy']]);
L('c1c','1.3 · Holland y De Jong','Los algoritmos genéticos',{viz:'ga',who:['holland','dejong']},[
['El siguiente paso significativo fue el desarrollo de los algoritmos evolutivos en las décadas de 1960 y 1970. Primero, John Holland y sus colaboradores de la Universidad de Míchigan desarrollaron los algoritmos genéticos.',0],
['Ya en 1962, Holland estudió los sistemas adaptativos y fue el primero en usar operaciones de cruce y recombinación para modelarlos. Su influyente libro, que resume el desarrollo de los algoritmos genéticos, se publicó en 1975.',1],
['Ese mismo año, Kenneth De Jong terminó su importante tesis doctoral, que demostró el potencial de los algoritmos genéticos para funciones objetivo ruidosas, multimodales o incluso discontinuas.',1],
['Los algoritmos genéticos son un método de búsqueda basado en la abstracción de la evolución darwiniana y la selección natural, representadas con operadores matemáticos: cruce o recombinación, mutación, aptitud y selección del más apto. Mira cómo la población sube generación tras generación.',2,'point'],
['Han tenido tanto éxito que se han escrito miles de artículos y cientos de libros. Algunas estadísticas muestran que la gran mayoría de las empresas de la lista Fortune 500 los usan para resolver problemas combinatorios complejos como la planificación, el ajuste de datos y la programación de tareas.',3]]);
L('c1c','1.3 · Rechenberg, Schwefel y Fogel','Estrategias evolutivas y programación evolutiva',{who:['rechenberg','schwefel','bienert','fogel'],bl:[['1963, Universidad Técnica de Berlín: Rechenberg y Schwefel crean las estrategias evolutivas para la ingeniería aeroespacial.',1],['Peter Bienert construye un «experimentador automático» con reglas simples de mutación y selección.',2],['Sin cruce: solo mutación para producir descendencia, conservando en cada generación la solución mejorada. Es una escalada de colinas con aleatorización.',3],['1960: Fogel propone la evolución simulada como proceso de aprendizaje. 1966: con Owens y Walsh crea la programación evolutiva, con máquinas de estados finitos mutadas al azar.',4],['Todo esto forma hoy la computación evolutiva.',5]]},[
['En el mismo periodo, Ingo Rechenberg y Hans-Paul Schwefel, ambos entonces en la Universidad Técnica de Berlín, desarrollaron en 1963 una técnica de búsqueda para problemas de ingeniería aeroespacial, llamada estrategia evolutiva.',1],
['Más tarde, Peter Bienert se unió a ellos y empezó a construir un experimentador automático usando reglas sencillas de mutación y selección.',2],
['En esta técnica no hay cruce: solo se usa la mutación para producir descendencia, y en cada generación se conserva la solución mejorada. Es, en esencia, un algoritmo sencillo de escalada de colinas con aleatorización.',3,'point'],
['Ya en 1960, Lawrence Fogel se propuso usar la evolución simulada como proceso de aprendizaje y herramienta para estudiar la inteligencia artificial. En 1966, junto con Owens y Walsh, desarrolló la programación evolutiva, representando las soluciones como máquinas de estados finitos y mutando una de ellas al azar.',4],
['Estas ideas evolucionaron hasta formar una disciplina más amplia: los algoritmos evolutivos y la computación evolutiva.',5]]);
L('c1c','1.3 · Kirkpatrick, Gelatt y Vecchi, 1983','El recocido simulado',{viz:'anneal',who:['kirkpatrick','gelatt','vecchi']},[
['Las décadas de 1980 y 1990 fueron la época más apasionante para los algoritmos metaheurísticos. El siguiente gran paso fue el recocido simulado, en 1983, de Kirkpatrick, Gelatt y Vecchi, inspirado en el recocido de los metales.',0],
['Es un algoritmo de búsqueda basado en trayectorias: parte de una solución inicial a alta temperatura y enfría el sistema gradualmente.',1],
['Un movimiento o nueva solución se acepta si es mejor; si no, se acepta con cierta probabilidad. Eso permite al sistema escapar de cualquier óptimo local.',2,'point'],
['Se espera que, si el sistema se enfría lo bastante despacio, se alcance la solución óptima global.',3]]);
L('c1c','1.3 · Glover, Dorigo y Koza','Tabú, hormigas y programación genética',{viz:'ants',who:['glover','dorigo','koza']},[
['El primer uso real de una metaheurística se remonta probablemente a la búsqueda tabú de Fred Glover, en 1986, aunque su influyente libro se publicó en 1997.',0],
['En 1992, Marco Dorigo terminó su tesis doctoral sobre optimización y algoritmos naturales, donde describió la optimización por colonias de hormigas.',1],
['Se inspira en la inteligencia colectiva de las hormigas, que usan feromonas como mensajeros químicos: los caminos cortos acumulan más feromona y atraen a más hormigas.',2,'point'],
['También en 1992, John Koza, de Stanford, publicó un tratado sobre programación genética, que sentó las bases de un campo nuevo del aprendizaje automático. Ya en 1988 había registrado su primera patente. La idea es usar el principio genético para criar programas informáticos y producir los mejores para cada tipo de problema.',3]]);
L('c1c','1.3 · Kennedy y Eberhart, 1995','Optimización por enjambre de partículas',{viz:'swarm',who:['kennedy','eberhart']},[
['Poco después, en 1995, el psicólogo social James Kennedy y el ingeniero Russell Eberhart desarrollaron la optimización por enjambre de partículas, PSO.',0],
['Está inspirada en la inteligencia colectiva de peces y aves, e incluso en el comportamiento humano. Los agentes, llamados partículas, se mueven por el espacio de búsqueda partiendo de posiciones aleatorias.',1],
['El enjambre comunica la mejor solución actual y comparte la mejor global para concentrarse en las soluciones de calidad. Mira cómo se agrupan en la zona más oscura, el mínimo.',2,'point'],
['Desde entonces han surgido unas 20 variantes, aplicadas a casi todas las áreas con problemas complejos. Hay pruebas sólidas de que PSO supera a los algoritmos tradicionales e incluso a los genéticos en la mayoría de los problemas, aunque esto dista de ser concluyente.',3]]);
L('c1c','1.3 · Wolpert y Macready, 1997','No hay almuerzo gratis',{viz:'nfl',who:['wolpert','macready']},[
['En 1997, la publicación de los teoremas de no hay almuerzo gratis en optimización, de David Wolpert y William Macready, causó un gran revuelo en la comunidad.',0],
['Los investigadores siempre habían buscado algoritmos mejores, o incluso universalmente robustos, sobre todo para problemas NP difíciles. Pero estos teoremas establecen que si el algoritmo A funciona mejor que B en algunas funciones, entonces B supera a A en otras.',1],
['Si se promedia sobre todo el espacio de funciones posibles, A y B rinden igual de bien. No existe un algoritmo universalmente mejor. Decepcionante, ¿verdad?',2,'warn'],
['Pero no necesitamos el promedio sobre todas las funciones: queremos las mejores soluciones para nuestro problema concreto. Y sabemos por experiencia que algunos algoritmos superan a otros en ciertos tipos de problemas.',3,'point'],
['Así que la investigación se centra en encontrar el mejor algoritmo para cada tipo de problema, para la mayoría de los problemas, no para todos. La búsqueda continúa.',3]]);
L('c1c','1.3 · Siglo XXI','Armonías, abejas y luciérnagas',{who:['geem','nakrani','tovey','pham','karaboga','yang'],bl:[['2001: Zong Woo Geem y otros crean la búsqueda armónica (HS): distribución de agua, transporte, programación.',1],['2004: Nakrani y Tovey proponen el algoritmo de la abeja melífera para centros de alojamiento web.',2],['2005: algoritmo de abejas de D. T. Pham y colaboradores; Colonia Artificial de Abejas (ABC) de Karaboga.',3],['2008: el autor del libro, Xin-She Yang, crea el algoritmo de las luciérnagas (FA).',4],['Cada vez hay más metaheurísticas: el libro intenta presentar las más recientes e importantes con sus aplicaciones.',5]]},[
['A principios del siglo veintiuno la situación se volvió aún más apasionante. En 2001, Zong Woo Geem y otros desarrollaron la búsqueda armónica, aplicada a la distribución de agua, la modelización del transporte y la programación.',1],
['En 2004, Sunil Nakrani y Craig Tovey propusieron el algoritmo de la abeja melífera y su aplicación a la optimización de centros de alojamiento web.',2],
['Le siguió en 2005 un novedoso algoritmo de abejas de D. T. Pham y colaboradores, y la Colonia Artificial de Abejas de Derviş Karaboğa.',3],
['En 2008, el autor de este libro, Xin-She Yang, desarrolló el algoritmo de las luciérnagas. Se publicaron muchos artículos sobre él y ha despertado un amplio interés.',4,'point'],
['Como vemos, cada vez se desarrollan más algoritmos metaheurísticos. Una gama tan diversa requiere un resumen sistemático, y el libro intenta presentar las metaheurísticas más recientes e importantes, junto con sus aplicaciones.',5]]);
L('c1c','Capítulo 1 · Ejercicios y referencias','Ejercicios propuestos del capítulo 1',{bl:[['1.1 Halla el valor mínimo de f(x) = x² − x − 6 en (−∞, ∞).',1],['1.2 Para el problema anterior, usa la derivación simple para obtener el mismo resultado.',1],['1.3 Euclides demostró que, con perímetro fijo, el cuadrado encierra la mayor área entre todos los rectángulos. Da tu propia demostración.',2],['1.4 Diseña un depósito cilíndrico que use el mínimo material con la mayor capacidad. ¿Qué relación hay entre el radio r de la base y la altura h?',2],['1.5 Herón demostró que el camino PAQ es el más corto cuando el ángulo de incidencia α es igual al de reflexión β. Demuestra que α = β da la distancia PAQ más corta.',3]]},[
['El capítulo 1 termina con cinco ejercicios. Aquí están los enunciados.',1],
['El 1.3 y el 1.4 piden demostraciones de optimización geométrica.',2],
['Y el 1.5 pide demostrar el resultado de Herón. Todos están resueltos paso a paso en la sección final de ejercicios. El capítulo cierra con 41 referencias, que puedes consultar en la pestaña Referencias.',3,'point']]);

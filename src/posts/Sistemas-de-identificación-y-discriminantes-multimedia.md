---
title: "Sistemas de identificación y discriminantes multimedia"
author: "Kaled Sandoval"
description: "Sistemas de detección de deepfakes y contenido generado por IA, sus riesgos, antecedentes y soluciones mediante marcas de agua, metadatos y bases de datos."
date: "2026-08-18"
---

## Introducción

Durante la última década la IA ha avanzado abismalmente en la generación de imágenes y videos, de tal forma que logra resultados hiperrealistas los cuales ya no son fácilmente diferenciables de la vida real. Esto representa posibles riesgos importantes cuando hablamos sobre la creación de contenido multimedia que pueda difamar a tu persona, haciendo sufrir a personas inocentes de consecuencias sobre actos que no cometieron sólo porque alguien decidió utilizar una imagen de su cara para la creación de un deepfake, por lo tanto, el objetivo del presente ensayo es demostrar que es importante que los y las analistas de datos creemos discriminantes en la información creada por IA generativa para diferenciar el contenido creado artificialmente. Tomando en cuenta lo anterior surgen preguntas interesantes ante la incertidumbre de estas tecnologías. ¿Qué posibles consecuencias podríamos obtener si no se regula correctamente? ¿Cuáles son los antecedentes de este problema y que podríamos esperar en un futuro? Y mucho más importante ¿Qué posibles soluciones están a nuestro alcance? A lo largo de este ensayo, exploramos posibles respuestas.

## Los riesgos de la IA generativa

La inteligencia artificial tiene la capacidad de crear contenido sobre personas reales, basta con que subas una foto de algún individuo para que tenga una referencia, y en base a la información de entrada genera multimedia convincente. Esto es conocido como un “deepfake” el intercambiar tu cara en el cuerpo de otra persona. Anteriormente el uso de “deepfakes” era únicamente con fines de entretenimiento, pues eran fácilmente identificables, la tecnología responsable de la creación de dicho contenido no era tan avanzada como lo es actualmente, por lo tanto uno de los riesgos más críticos y alarmantes en la actualidad es la posibilidad de utilizar deepfakes para fabricar evidencia falsa, especialmente dentro de procesos judiciales. Como advierte Alkhatib (2025), esta integración de contenido sintético en el ámbito legal compromete la resolución de casos específicos, como la confianza general en el sistema de justicia. Esto demuestra que el impacto malintencionado de la IA trasciende las difamaciones de la política o el entretenimiento; es un peligro latente que puede fomentar la incriminación de cualquier ciudadano inocente, haciendo vital la protección de la identidad individual en el mundo digital.

## Antecedentes del problema 

Desde el 2020 ha habido múltiples casos del mal uso de la IA para generar información que difamar personas, mayoritariamente las víctimas son personas en situaciones de fama, figuras públicas que forman parte de la cultura popular, artistas de la gran pantalla, aquellos y aquellas que se dedican a la música e influencers que se caracterizan por su gran cercanía con sus comunidades por medio del internet. Por ejemplo, Taylor Swift, cantante pop, sufrió de difamación, pues utilizaron la tecnología de los deepfakes para generar contenido pornografico de su persona, lamentablemente, ella no es la única mujer que ha pasado por esta situación, las influencers son las que están más propensas a convertirse en víctimas del mal uso de estas tecnologías, tal es el caso de la influencer Arigameplays o el caso de Alana Flores, donde igualmente, se genero contenido pornografico donde su rostro se mostraba vividamente. A la par de este grave riesgo, existe una brecha tecnológica preocupante que agrava la situación: las herramientas de defensa no avanzan a la misma velocidad que las herramientas de creación. Lai et al. (2025) señalan que los métodos de detección han quedado rezagados frente a estos progresos. Un claro ejemplo de esto es el clasificador diseñado por OpenAI para identificar texto sintético, el cual tuvo que ser retirado debido a su baja precisión y rendimiento inconsistente (X. Zhao et al., 2025, p. 2621).

## Posibles soluciones

La información digital puede ser discriminada, por ejemplo: poner marcas de agua en el contenido generado por IA, es una forma de discriminar la información, pues la identificamos fácilmente por medio de una característica y la separamos del resto de contenido original hecho por seres humanos, así como lo menciona Takale et al. (2024). El uso de metadatos (datos no visuales que están implícitamente dentro de los archivos generados) puede ser muy efectivo para lograr nuestro objetivo, los softwares encargados del consumo de contenido (como las redes sociales, facebook, instagram, twitter, etc.) pueden leer dichos metadatos, y asi separar las imagenes y videos han sido creados por IA.

Otra solución aunque menos escalable pero posiblemente muy efectiva, es utilizar bases de datos que tengan como único fin, guardar los deepfakes que se generan. Cuando se tenga incertidumbre sobre si algo es verdad o no, podríamos consultar esta misma base de datos, y en caso de que los valores de entrada coincida (el contenido del cual dudamos su veracidad) con algún valor dentro de la base de datos podríamos saber consecuentemente que se trata de un deepfake.

## Conclusión 

En conclusión, hemos visto los antecedentes y consecuencias de la falta de regulación en el contenido generado por IA, como esta herramienta está siendo utilizada de manera no ética y la falta de interés de las empresas responsables de estas tecnologías por implementar sistemas que nos ayuden a distinguir su contenido. Se hace evidente que los y las analistas de datos tenemos que tomar cartas en el asunto, creando discriminantes para todo contenido multimedia hecho por la inteligencia artificial generativa. Los avances tecnológicos deberían de facilitar nuestra vida y ayudarnos a crecer, no tienen porque perjudicarnos atentando contra la integridad e imagen de la personas.

## Referencias

<ul class="flex flex-col gap-4">
  <li class="mb-4">Alkhatib, M. (2025). A Multifaceted Deepfake Prevention Framework Integrating Blockchain, Post-Quantum Cryptography, Hybrid Watermarking, Human Oversight, and Policy Governance. <em>Computers</em>, <em>14</em>(11), 488. <a href="https://doi.org/10.3390/computers14110488" target="_blank" rel="noopener noreferrer">https://doi.org/10.3390/computers14110488</a></li>
  
  <li class="mb-4">Lai, Z., Arif, S., Feng, C., Liao, G., & Wang, C. (2025). Enhancing Deepfake Detection: Proactive Forensics Techniques Using Digital Watermarking. <em>Computers, Materials & Continua</em>, <em>82</em>(1). <a href="https://doi.org/10.32604/cmc.2024.059370" target="_blank" rel="noopener noreferrer">https://doi.org/10.32604/cmc.2024.059370</a></li>
  
  <li class="mb-4">Takale, D., Mahalle, P., & Sule, B. (2024). Exploring Watermarking Techniques in Generative AI: A Brief Overview. <em>Journal of Image Processing and Artificial Intelligence</em>, <em>10</em>, 1–5.</li>
  
  <li class="mb-4">X. Zhao, S. Gunn, M. Christ, J. Fairoze, A. Fabrega, N. Carlini, S. Garg, S. Hong, M. Nasr, F. Tramer, S. Jha, L. Li, Y. -X. Wang, & D. Song. (2025). SoK: Watermarking for AI-Generated Content. <em>2025 IEEE Symposium on Security and Privacy (SP)</em>, 2621–2639. <a href="https://doi.org/10.1109/SP61157.2025.00178" target="_blank" rel="noopener noreferrer">https://doi.org/10.1109/SP61157.2025.00178</a></li>
</ul>
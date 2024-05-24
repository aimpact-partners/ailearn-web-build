System.register(["@beyond-js/kernel@0.1.9/bundle"],function(t,e){"use strict";var a,i,r;return t("txt",void 0),{setters:[function(e){a=e}],execute:function(){r=a.Bundle,(i=new r({module:{vspecifier:"@aimpact/ailearn-app@0.0.34.dev-01/modules/management/settings",multibundle:!0},type:"txt"},e.meta.url).package("es")).dependencies.update([]),(r=new Map).set("./txt",{hash:1324070378,creator:function(e,a){a.txt={actions:{add:"Agregar",analyse:"Sugerir mejoras",activities:"Generar actividades",activity:"Actividades",applySuggestions:"Aplicar sugerencias",back:"Atrás",cancel:"Cancelar",continue:"Continuar",cover:"Generar portada",clean:"Limpiar",create:"Crear",confirm:"Confirmar",delete:"Eliminar",edit:"Editar",generate:"Generar con IA",next:"Siguiente",publish:"Publicar",removeSuggestions:"Ignorar sugerencias",refine:"Refinar",save:"Guardar",update:"Subir documento",upload:"Subir imagen",manual:"Diseño manual"},activities:{minutes:"Min",description:"Descripción",objective:"Objetivo",type:"Tipo",questions:"Preguntas",topics:"Temas",title:"Actividades",empty:{title:"Aún no posees actividades",text:"Agrega una actividad a tu módulo"},createModal:{title:"Selecciona el tipo de actividad",validation:"Debes completar el titulo y la descripción del módulo para poder agregar una actividad.",validationTitle:"Módulo incompleto"},delete:{title:"¿Realmente desea eliminar esta actividad?",subtitle:"Al eliminar esta actividad, no podrá recuperarla."},types:{"content-theory":"Contenido/Teoría","multiple-choice":"Selección Múltiple","character-talk":"Conversación con un Personaje",debate:"Debate",spoken:"Exposición Oral"},descriptionTypes:{"content-theory":"Artículo, adaptaciones y audios sobre un tema específico para construir una base teórica.","multiple-choice":"Preguntas de selección múltiple para evaluar comprensión","character-talk":"Aprender a través de una conversación con un personaje de ficción",debate:" Conversación uno-a-uno con un asistente virtual para explorar y profundizar temas",spoken:"Presentación oral sobre un tema asignado para evaluar conocimientos u otros usos como creatividad, presentaciones originales, etc"},states:{empty:"Actividad vacia",completed:"Completada",processing:"En proceso"}},breadcrumb:{modules:"Módulos",management:"Borrador"},module:{title:"Agrega el nombre del módulo de aprendizaje",description:"Descripción",objective:"Objetivo del módulo",owner:"Administrador",actions:{description:"Agrega una descripción",addActivity:"Agrega actividad"},activities:{title:"Lista de actividades",empty:{title:"Módulo sin actividades",text:"Agrega una actividad a tu módulo"}}},refine:{title:"Asistente de Diseño de Actividad con IA",description:"Utiliza el asistente de IA para personalizar y mejorar el diseño de la actividad.",description2:"Simplemente escribe lo que tienes en mente, y la IA ayudará a estructurar la actividad para que se ajuste a tus objetivos de aprendizaje.",textarea:{label:"Tus aportes",placeholder:"Comparte sugerencias específicas o áreas de mejora..."},image:{title:"Refina la calidad de tu imagen",subtitle:"Tus aportes nos ayudarán a mejorar el contenido.",confirm:{title:"¿Deseas reemplazar la imagen actual?",subtitle:"Si confirmas, la imagen actual será reemplazada."}},module:{title:"Refina la calidad de tu módulo",subtitle:"Tus aportes nos ayudarán a mejorar el contenido.",confirm:{title:"¿Deseas reemplazar el contenido actual?",subtitle:"Si confirmas, el proceso de generación reemplazará el contenido actual con el nuevo. Si deseas conservar el contenido actual, haz clic en cancelar."}}},modal:{cancel:{title:"¿Estás seguro?",description:"Tus cambios no han sido guardados. Si continúas, los perderás."}},delete:{title:"Eliminar contenido",description:"¿Estás seguro de que quieres eliminar el contenido de esta actividad?"},picture:{title:"Genera la mejor imagen para tu módulo",description:"Esta herramienta te ayudará a generar la mejor imagen para tu módulo. Puedes subir una imagen y nosotros generaremos la mejor imagen para tu módulo. También puedes usar el editor de imágenes para editar la imagen y generar la mejor imagen para tu módulo.",notes:{label:"Notas",placeholder:"Comparte tus sugerencias para crear la mejor imagen para tu módulo"},confirm:{title:"¿Quieres reemplazar la imagen actual?",subtitle:"Si confirmas, la imagen actual será reemplazada."}},refiningActivity:["Analizando el objetivo de la actividad para garantizar alineación con los resultados de aprendizaje...","Revisando los componentes de la actividad para maximizar la participación estudiantil...","Optimizando la estructura de la actividad para facilitar la comprensión y la aplicación del conocimiento...","Ajustando los materiales didácticos para una mayor accesibilidad y diversidad...","Evaluando métodos de entrega para una interacción efectiva y adaptativa...","Incorporando feedback estudiantil para mejorar la experiencia de aprendizaje...","Calibrando el nivel de dificultad para satisfacer un rango amplio de habilidades estudiantiles...","Integrando tecnología educativa para enriquecer la actividad...","Actualizando los recursos de la actividad para mantener relevancia y actualidad...","Finalizando el proceso de refinamiento para una actividad educativa integral y atractiva..."],generatingImage:["Recepción del texto para la generación de la imagen...","Análisis del contexto del módulo educativo...","Selección de elementos visuales acorde al año escolar...","Composición de bocetos preliminares basados en el texto...","Ajuste de detalles gráficos y estilo visual...","Incorporación de criterios pedagógicos en la imagen...","Optimización de la imagen para una mejor retención educativa...","Finalización de la renderización de la imagen...","Revisión de calidad y coherencia con el módulo...","Imagen generada con éxito y lista para su integración en el módulo."],errors:{CONTACT_ADMIN:"Por favor, contacte con el administrador"},toast:{modulePublished:"Módulo publicado correctamente",errorPublishingModule:"Error al publicar el módulo"}}}}),i.exports.descriptor=[{im:"./txt",from:"txt",name:"txt"}],i.exports.process=function({require:e,prop:a,value:i}){!e&&"txt"!==a||t("txt",e?e("./txt").txt:i)},t("__beyond_pkg",i),t("hmr",new function(){this.on=(e,a)=>i.hmr.on(e,a),this.off=(e,a)=>i.hmr.off(e,a)}),i.initialise(r)}}});
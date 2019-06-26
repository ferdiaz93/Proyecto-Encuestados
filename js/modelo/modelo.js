/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [{
    textoPregunta: "Mi primer Pregunta", 
    id: 1, 
    cantidadPorRespuesta: [
      {
        textoRespuesta: "mi unica respuesta", 
        cantidad: 2,
      }
    ]
    }];

  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
    var ids = [];

    this.preguntas.forEach(function(pregunta){
      ids.push(pregunta.id)
    })
    

    if (ids.length){
    
      return Math.max(...ids)
      
    } else {
        return 0
      }

      
    //COMPLETAR

  },

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function(nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;
    var nuevaPregunta = {'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas};
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  //se guardan las preguntas


  borrarPreguntasDeArray: function(id){
    this.preguntas = this.preguntas.filter(function(pregunta){
      return pregunta.id !== id
    })
    console.log(this.preguntas);
    this.guardar()
    this.preguntaEliminada.notificar();
  },


  sumarleVoto: function() {
    
  },

  editarPregunta: function(id, textoPregunta, respuestas){

    const pregunta = this.preguntas.find(function(pregunta){
      return pregunta.id === id    
    })
    
    pregunta.textoPregunta(textoPregunta)
    pregunta.cantidadPorRespuesta(respuestas)

    this.guardar()
    this.preguntaEditada.notificar()
  },


  borrarTodasLasPreguntas: function(){

  },

  guardar: function(){
    window.localStorage.setItem('preguntas', JSON.stringify(this.preguntas))
  },

};


// [{‘textoPregunta’: “Mi primer Pregunta”, 
// ‘id’: 0, 
// ‘cantidadPorRespuesta’: [
//   {‘textoRespuesta’: “mi unica respuesta”, 
//     ‘cantidad’: 2
//   }
// ]
// }]
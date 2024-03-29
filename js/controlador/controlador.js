/*
 * Controlador
 */
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
      this.modelo.agregarPregunta(pregunta, respuestas);
  },

  borrarPregunta: function(id){
    this.modelo.borrarPreguntasDeArray(id)
  },
  borrarTodo: function(){
    this.modelo.borrarTodasLasPreguntas()
  }
};

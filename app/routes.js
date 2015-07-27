module.exports = {
  bind : function (app, assetPath) {

    /*-----------------------------------------------------*/
    app.get('/', function (req, res) {
      res.render('index', {'assetPath' : assetPath})
    });

  }

};


/* for getting lots of variables out of a string...
String[] str_array = "name:score".split(":");
String stringa = str_array[0]; 
String stringb = str_array[1];
*/

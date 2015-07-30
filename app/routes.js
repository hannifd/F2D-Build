module.exports = {
  bind : function (app, assetPath) {

    /*-----------------------------------------------------*/
    app.get('/', function (req, res) {
      res.render('index', {'assetPath' : assetPath})
    });

    /*-----------------------------------------------------*/

    app.get('/condition-selection', function (req, res) {
      res.render('condition-selection', {'assetPath' : assetPath})
    });
    
    app.get('/diabetes-with-insulin', function (req, res) {
      res.render('diabetes-with-insulin', {'assetPath' : assetPath})
    });

    app.get('/hypoglycaemic-events', function (req, res) {
      res.render('hypoglycaemic-events', {'assetPath' : assetPath, 'insulin' : req.query.insulin})
    });

    app.get('/review-conditions', function (req, res) {
      res.render('review-conditions', {'assetPath' : assetPath, 'insulin' : req.query.insulin, 'hypos' : req.query.hypos})
    });

    app.get('/your-driver-number', function (req, res) {
      res.render('your-driver-number', {'assetPath' : assetPath, 'insulin' : req.query.insulin, 'hypos' : req.query.hypos})
    });

    app.get('/your-personal-details', function (req, res) {
      res.render('your-personal-details', {'assetPath' : assetPath, 'insulin' : req.query.insulin, 'hypos' : req.query.hypos})
    });

    app.get('/your-address-details', function (req, res) {
      res.render('your-address-details', {'assetPath' : assetPath, 'insulin' : req.query.insulin, 'hypos' : req.query.hypos})
    });

    app.get('/summary', function (req, res) {
      res.render('summary', {'assetPath' : assetPath})
    });

    app.get('/confirmation', function (req, res) {
      res.render('confirmation', {'assetPath' : assetPath})
    });
  }

};


/* for getting lots of variables out of a string...
String[] str_array = "name:score".split(":");
String stringa = str_array[0]; 
String stringb = str_array[1];
*/

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




    /* - - - - - - - - - - - - - - - - - - - */
    /* Chooser for Basic Branching control   */
    app.get('/branch', function (req, res) {

    var branch = req.query.branch;
    /* this line pulls out the name of the branch from the input buttons */

    res.render(branch, {'assetPath' : assetPath});
    /* this line renders a new page based on the HTML of the filename + branchname  */
    
 
    });


    /* - - - - - - - - - - - - - - - - - - - */
    /* Special case for: Diabetes / Insulin = Yes No   */
    app.get('/branch-a', function (req, res) {

    var branch = req.query.branch;
    var q1 = req.query.q1answer;
    /* this line pulls out the name of the branch from the input buttons */

    if (q1 == "verify/verify-1") {
      res.render(q1, {'assetPath' : assetPath});
    } else{};

    res.render(branch, {'assetPath' : assetPath});
    /* this line renders a new page based on the HTML of the filename + branchname  */
    
 
    });



  }

};


/* for getting lots of variables out of a string...
String[] str_array = "name:score".split(":");
String stringa = str_array[0]; 
String stringb = str_array[1];
*/

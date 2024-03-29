const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("courses/create");
  }
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://images.unsplash.com/photo-1635819335758-304866e30d39?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(course => res.render("courses/edit",{
        course: mongooseToObject(course)
      }))
      .catch(next);
  }
  update(req, res, next) {
    Course.updateOne({_id: req.params.id},req.body)
      .then(()=> res.redirect('/me/stored/courses'))
      .catch(next);
  }
}

module.exports = new CourseController();

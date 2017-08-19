$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/karthikarwin.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
	  console.log(response.badges);
	  addCourses(response.badges);
    }
  });
  
  function addCourses(courses) {
	  var $badges = $("#badges");
	  
	  courses.forEach(function(course) {
		 var $course = $("<div />", {
			'class' : 'course'
		 }).appendTo(badges);
		 
		 $("<h3 />", {
			text : course.name 
		 }).appendTo($course);
		 
		 $("<img />", {
			 src: course.badge
		 }).appendTo($course);
		 
		 $("<a />", {
			 href : course.course_url,
			 'class' : "btn btn-primary",
			 target : "_blank",
			 text : "View Course"
		 }).appendTo($course);
	  });
  }

});

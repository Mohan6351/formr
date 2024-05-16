document.getElementById('contact-form').addEventListener('submit',function(e){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('textarea').value;
    var subject = "new meassge from"+name;
    var body ="name:"+ name +"\Email" + email +"\nMessage"+message;
    var mailto_link = 'mailto:mohankumarho2003@gmai.com'+'?subject'+subject+'&body=' + encodeURIComponent(body);
window.location.href=mailto_link;
});
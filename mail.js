document.getElementById('contact-form')
.addEventListener('submit',function(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('name').value;
    var message=document.getElementById('message').value;
    var subject="new message from "+name;
    var body="name:"+ name +"\nemail:"+email+"\nmessage:"+message;
    var mailto_link='mailto:mohankumarho2003@gmail.com'+'?subject='+subjet+'&body='+encodeURIComponent(body);
    window.location.href=mailto_link;
});
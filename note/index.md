---
layout: default-nometa
title: Note
heading: Leave a note.
date: 11th March 2016
published: true
private: false
format: markdown
version: 1.0
---

<div id="note" class="contact-form hidden" data-focus="#contact-method">
    <textarea id="contact-method" class="contact-method" placeholder="Twitter @username" rows="1"></textarea>
    <textarea id="contact-subject" class="contact-subject" placeholder="Type a short subject..." rows="1"></textarea>
    <textarea class="contact-message" placeholder="Write your message for Graham..." rows="7"></textarea>
    <div class="contact-email">Email this</div>
    <div class="contact-submit">Send</div>
</div>

<p class="contact-text-block"><br/>Thanks for taking the time to leave a note! Interesting notes may be quoted in an article on this site. Please use the email option to send any private messages, or contact Graham on <a href="http://twitter.com/gmph">Twitter</a>.</p>

<div class="contact-messages"></div>

<script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>
<script language="javascript">

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    }

    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    var datastore = new Firebase("https://popping-heat-4962.firebaseio.com/");

    if (window.location.hash == '#view'){
        $('.contact-form, .contact-text-block').css('display','none');
        datastore.child('/messages/').orderByChild('date').on("child_added", function(snapshot) {
            writeToTopOfList(snapshot);
        });
    } else {
        if (window.location.hash && window.location.hash != ''){
            var val = window.location.hash.substring(1).replaceAll('-',' ').capitalizeFirstLetter();
            $('.contact-subject').val(val);
        }
        $('.contact-method').focus();
        $('.contact-form, .contact-text-block').css('display','block');
        datastore.child('/messages/').orderByChild('date_inverse').off("child_added");
    }

    $('.contact-submit').click(function(){
        sendContactMessage();
    });
    $('.contact-email').click(sendEmailMessage);

    $('.contact-form textarea').keyup(function(){
        if ($(this).val() != ""){
            $(this).removeClass('invalid');
        }
    });

    function sendEmailMessage(){
        var user = "@"+$('.contact-method').eq(0).val().replace(/[^\w]+/g,'');
        var subject = $('.contact-subject').eq(0).val();
        var message = $('.contact-message').eq(0).val();
        var uri = "mailto:hi@gmph.co?subject="+encodeURI(subject)+"&body="+encodeURI(message)+"%0A%0ATwitter%3A%20"+encodeURI(user);
        sendContactMessage(uri);
    }

    function sendContactMessage(uri){

        var user = "@"+$('.contact-method').eq(0).val().replace(/[^\w]+/g,'');
        var subject = $('.contact-subject').eq(0).val();
        var message = $('.contact-message').eq(0).val();
        var id = new Date().getTime().toString();
        var path = window.location.pathname != "/" ? window.location.pathname : "0";
        var valid = true;

        $('.contact-form textarea').each(function(){
            if ($(this).val() == ""){
                $(this).addClass('invalid');
                valid = false;
            }
        });

        if (valid){
            datastore.child('/messages/'+id).set({
                date: id,
                date_inverse: 0 - parseInt(id),
                twitter: user,
                subject: subject,
                message: message,
            });

            $('.contact-submit').addClass('sent').text('Sent!');

            setTimeout(function(){
                $('.contact-form textarea').val('');
                $('.contact-submit').removeClass('sent').text('Send');
            },2000);

            if (uri){
                window.open(uri,"_blank");
            }
        }

    }

    function writeToTopOfList(snapshot){
        $('<div class="message"><div class="meta">'+(snapshot.val().twitter ? '<a href="http://twitter.com/'+(snapshot.val().twitter.substring(1))+'">'+snapshot.val().twitter+'</a>' : '')+' on '+timeConverter(snapshot.key())+'</div> <div class="text">“'+snapshot.val().message+'”</div></div>').prependTo('.contact-messages');
    }

    function timeConverter(UNIX_timestamp){
        var a = new Date(parseInt(UNIX_timestamp));
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var formatted = month + ' ' + date + ', ' + year;
        return formatted;
    }

</script>

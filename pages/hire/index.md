---
layout: page
title: Get In Touch
date: 6th June 2017
published: true
private: false
format: markdown
version: 1.0
permalink: /contact
redirect_from:
- /hire
- /hire/
---

<div class="mw-480">

    <h1 class="heading">Get In Touch</h1>

    <p class="sans-serif">I am available for contract work. Have a look at <a href="/">my portfolio</a> to see how I use design to accomplish business goals.</p>

    <br>

    <form class="form-enquiry" autocomplete="on">

        <label for="summary">Your message</label>
        <textarea class="input-summary" name="summary" placeholder="e.g. I'm looking for help with user research, iOS and Android interface designs for a mental health support startup..."></textarea>
        
        <!-- <label for="budget">Your budget (Optional)</label>
        <input class="input-budget" name="budget" type="number" placeholder="e.g. 8000 (£)" /> -->

        <label for="name">Your full name</label>
        <input class="input-name" name="name" type="text" placeholder="e.g. Harold Finch" autocomplete="name" />

        <label for="email">Your email</label>
        <input class="input-email" name="email" type="email" placeholder="e.g. harold@finchtech.com" autocomplete="email" />

        <label for="phone">Your phone number <span class="op4">(optional)</span></label>
        <input class="input-phone" name="phone" type="tel" placeholder="e.g. 01314 495864" autocomplete="tel" />

        <br>

        <a class="button large submit" data-icon="arrow-right">Send</a>

    </form>

    <div class="alert form-status-success hidden"><strong>Sent!</strong> I will get back to you shortly.</div>
    <div class="alert warning form-status-invalid hidden dismissable">
        <strong>Oops!</strong> Please ensure you filled in the required fields correctly.
        <div class="dismiss"></div>
    </div>
    <div class="alert danger form-status-failure hidden dismissable">
        <strong>Uh oh!</strong> Something went wrong. Please refresh and try again.
        <div class="dismiss"></div>
    </div>

</div>

<br>

<script language="javascript">

    $('.submit').click(onSubmit);

    function onSubmit(){
        if (isValid()){
            submitForm();
        } else {
            onInvalidSubmission();
        }
    }

    function getData(){
        return {
            summary: $('.input-summary').val(),
            name:  $('.input-name').val(),
            email: $('.input-email').val(),
            phone: $('.input-phone').val(),
            budget: parseInt($('.input-budget').val()) || 0
        }
    }

    function isValid(){
        var data = getData();
        return data.summary.length && data.name.length && (data.email.indexOf('@') > -1 || data.phone.length);
    }

    function onInvalidSubmission(){
        $('.alert').addClass('hidden');
        $('.form-status-invalid').removeClass('hidden');
    }

    function onSuccessfulSubmission(){
        $('.form-enquiry').addClass('hidden');
        $('.alert').addClass('hidden');
        $('.form-status-success').removeClass('hidden');
    }

    function onUnsuccessfulSubmission(){
        $('.alert').addClass('hidden');
        $('.form-status-failure').removeClass('hidden');
    }

    function submitForm(){
        $.ajax({
            url: 'https://gmph-work.glitch.me/enquiry',
            type: 'POST',
            data: JSON.stringify(getData()),
            headers: {
                'content-type': 'application/json',
            },
            dataType: 'json',
            statusCode: {
                200: onSuccessfulSubmission,
                500: onUnsuccessfulSubmission
            },
            error: onUnsuccessfulSubmission
        });
    }

</script>
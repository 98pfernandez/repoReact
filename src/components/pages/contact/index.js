function Contact() {
return(

    <form method="get">
    <fieldset class="formulario">
        <legend> Personal information</legend>
        <label for="name">Name:</label> 
        <input type="text" name="nombre" id="name" placeholder="Insert name..."/> 

        <label for="lastname">Last name:</label> 
        <input type="text" id="lastname" placeholder="Insert last name..."/> 

        <label for="email">E-mail</label> 
        <input type="email" id="email" name="email" placeholder="Insert e-mail..."/>


    </fieldset>

    <fieldset>
        <legend>Question:</legend>
        <textarea name="" placeholder="Tell us about your questions" id="" cols="150" rows="10"></textarea>
    </fieldset>


    <input class="formButton" type="submit" name="enviar" width="50px" height="50px"/>
</form>
)
}

export default Contact;

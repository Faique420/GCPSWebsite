

     This is a static site with no backend, so the form can't send email
     on its own. To keep it fully functional out of the box, submitting
     builds a pre-filled email (via mailto:) so a message always reaches
     the inbox through the visitor's own email client.

     To collect messages directly into a database/inbox instead, wire
     this form up to a form backend (e.g. Formspree, Web3Forms, Getform)
     and swap the code inside the submit handler for a fetch() call —
     see the comment near the bottom of this function.

import { useActionState,  useState } from 'react';
import classes from './new-comment.module.css';

const NewComment=({onAddComment})=> {
  const [isInvalid, setIsInvalid] = useState(false);

  const sendCommentHandler=(previousState, formData)=> {
    const enteredEmail = formData.get("email");
    const enteredName = formData.get("name");
    const enteredComment = formData.get("comment");

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }
  const [error, submitAction, isPending] = useActionState(
    sendCommentHandler,
    null
  );
  return (
    <form className={classes.form} action={submitAction}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor='email'>Your email</label>
          <input type='email' id='email' name='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' name='name' />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor='comment'>Your comment</label>
        <textarea id='comment' rows='5' name='comment'></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className={classes.btn}>Submit</button>
    </form>
  );
}

export default NewComment;
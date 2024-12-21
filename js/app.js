import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { app } from "./firebase.js"; // Adjust the path if necessary

const db = getFirestore(app);

document.getElementById('applyForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const firstName = document.getElementById('first_name').value;
  const lastName = document.getElementById('last_name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  try {
    const docRef = await addDoc(collection(db, 'applicants'), {
      firstName,
      lastName,
      email,
      phone
    });
    console.log('Document written with ID: ', docRef.id);
    alert('Application submitted successfully!');
  } catch (e) {
    console.error('Error adding document: ', e);
    alert('Error submitting application. Please try again.');
  }
});
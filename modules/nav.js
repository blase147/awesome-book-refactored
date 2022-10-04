export default class Nav {
  navigation = () => {
    const formContainer = document.getElementById('formContainer');
    const contactInformation = document.getElementById('contact-information');
    const listAchor = document.getElementById('list');
    const addNew = document.getElementById('add-new');
    const contactInfo = document.getElementById('contact-info');
    const headerTitle = document.querySelector('.awesome-books');
    const bookDisplay = document.getElementById('bookDisplay');
    let errMessage = '';
    errMessage = () => 'Sorry there are no books for now.';
    window.addEventListener('load', () => {
      if (bookDisplay.div === null) {
        document.getElementById('.message').innerHTML = errMessage();
      } else {
        bookDisplay.style.display = 'block';
        headerTitle.style.display = 'block';
        contactInformation.style.display = 'none';
        formContainer.style.display = 'none';
      }
    });

    listAchor.addEventListener('click', () => {
      bookDisplay.style.display = 'block';
      headerTitle.style.display = 'block';
      contactInformation.style.display = 'none';
      formContainer.style.display = 'none';
    });

    addNew.addEventListener('click', () => {
      bookDisplay.style.display = 'none';
      headerTitle.style.display = 'none';
      contactInformation.style.display = 'none';
      formContainer.style.display = 'block';
    });

    contactInfo.addEventListener('click', () => {
      bookDisplay.style.display = 'none';
      headerTitle.style.display = 'none';
      contactInformation.style.display = 'block';
      formContainer.style.display = 'none';
    });
  };
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyeTJLoqs5axw2mvsYiFMLyQbRCjDzABsNnWrWHd65RMxuqOXb2M5exBBfv1Rfh7aXs/exec'
      const form = document.forms['daftar-pengunjung']
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const myAlert = document.querySelector('.alert-me')
      const btnReset = document.querySelector('.btn-reset')
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        // ketika tombol submit diklik
        //tampilkan  tombol loading DAN ALERT, hilangkan tombol kirim dan reset
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        setTimeout(() => {
          myAlert.classList.toggle('d-none');
        }, 2000);
        btnReset.classList.toggle('d-none');
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then((response) => {
            console.log('Success!', response)
            //hilangkan  tombol loading DAN ALERT, tampilkan tombol kirim dan reset
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            setTimeout(() => {
              myAlert.classList.toggle('d-none');
            }, 2000);
            btnReset.classList.toggle('d-none');
            //Reset Form
            form.reset();
          })
          .catch(error => console.error('Error!', error.message))
      })    
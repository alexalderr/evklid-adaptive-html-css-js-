/* work-tabs */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.step').forEach(function (e) {
    e.addEventListener('click', function (e) {
        const tab = e.currentTarget.dataset.path;
        document.querySelectorAll('.tab-content').forEach(function (e) {
          e.classList.remove('tab-content--active')
          document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
        })
      })
    })
  })

  
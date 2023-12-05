 function lazyLoadImages() {
      const images = document.querySelectorAll('.lazy-image');

      // Options for the Intersection Observer
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust the threshold as needed
      };

      // Callback function to handle the intersection changes
      function handleIntersection(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove('lazy-image');
            observer.unobserve(lazyImage);
          }
        });
      }

      // Create an Intersection Observer with the specified options and callback
      const observer = new IntersectionObserver(handleIntersection, options);

      // Observe each lazy-loaded image
      images.forEach(image => {
        observer.observe(image);
      });
    }

    // Call the lazy load function when the document is ready
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
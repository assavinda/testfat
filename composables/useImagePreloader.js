export function useImagePreloader() {
    const images = ref({});
  
    function importAllImages() {
      const context = import.meta.glob("/public/images/**/*.{png,jpg,jpeg,webp,gif,svg}", {
        eager: true, // Eagerly load images
        as: "url"    // Get image URLs directly
      });
  
      Object.keys(context).forEach((key) => {
        const imageName = key
          .replace("/public/images/", "") // Remove base folder
          .replace(/\//g, "-");           // Replace slashes with hyphens
        
        images.value[imageName] = context[key];
  
        // Log successful image load
        console.log(`✅ Loaded: ${imageName} -> ${context[key]}`);
      });
    }
  
    importAllImages();
  
    return { images };
  }

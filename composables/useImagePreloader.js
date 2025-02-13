export function useImagePreloader() {
    const images = ref({});
  
    function importAllImages() {
      const context = import.meta.glob("/public/images/**/*.{png,jpg,jpeg,webp,gif,svg}", {
        eager: true,
        as: "url"  
      });
  
      Object.keys(context).forEach((key) => {
        const imageName = key
          .replace("/public/images/", "") 
          .replace(/\//g, "-");          
        
        images.value[imageName] = context[key];
  
        console.log(`✅ loaded: ${imageName}`);
      });
    }
  
    importAllImages();
  
    return { images };
  }

(() => {
  console.log("[TikTok Helper] Extension loaded successfully.");

  function injectMarker() {
    if (!document.body) {
      setTimeout(injectMarker, 100);
      return;
    }

    const existing = document.getElementById("tiktok-helper-active");
    if (existing) return;

    const marker = document.createElement("div");
    marker.id = "tiktok-helper-active";
    marker.textContent = "✓ TikTok Helper Active";
    marker.style.position = "fixed";
    marker.style.bottom = "20px";
    marker.style.right = "20px";
    marker.style.zIndex = "999999";
    marker.style.background = "#25F4EE";
    marker.style.color = "#000";
    marker.style.padding = "10px 15px";
    marker.style.borderRadius = "8px";
    marker.style.fontSize = "12px";
    marker.style.fontWeight = "700";
    marker.style.fontFamily = "Arial, sans-serif";
    marker.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    marker.style.cursor = "pointer";

    marker.addEventListener("click", () => {
      alert("TikTok Helper is active!\n\nFeatures:\n- Ad Hiding\n- Liked Video Filter\n- Download Tool");
    });

    document.body.appendChild(marker);
    console.log("[TikTok Helper] Floating marker injected.");
  }

  const observer = new MutationObserver(() => {
    console.log("[TikTok Helper] DOM change detected.");
  });

  if (document.body) {
    injectMarker();
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      injectMarker();
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
})();

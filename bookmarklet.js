function convertProfileDark(container) {
    let profilePopout = null;
    let validPopout = null;
    try {
        profilePopout = container
            .children[0]
            .children[0]
            .children[0]
            .children[0];
        validPopout = profilePopout.classList.item(0).startsWith("userPopout");
    } catch {
        return;
    }
    if (validPopout) {
        if (profilePopout.hasAttribute("style")) {
            if (profilePopout.classList.contains("theme-light")) {
                profilePopout.style.setProperty("--profile-gradient-overlay-color", "#00000099");
                profilePopout.style.setProperty("--profile-body-background-color", "#00000073");
                profilePopout.style.setProperty("--profile-role-pill-background-color", "#292b2f80");
                profilePopout.style.setProperty("--profile-role-pill-border-color", "#ffffff33");
                let primaryProperties = profilePopout.style.getPropertyValue("--profile-gradient-primary-color").slice(5).match(/.+?(?=, )/g);
                profilePopout.style.setProperty("--profile-gradient-primary-color", `hsla(${primaryProperties[0] + primaryProperties[1]}, 31%, 1)`);
                let secondaryProperties = profilePopout.style.getPropertyValue("--profile-gradient-secondary-color").slice(5).match(/.+?(?=, )/g);
                profilePopout.style.setProperty("--profile-gradient-secondary-color", `hsla(${secondaryProperties[0] + secondaryProperties[1]}, 51%, 1)`);
                profilePopout
                    .children[0]
                    .children[2]
                    .children[0]
                    .children[0]
                    .children[0]
                    .children[1]
                    .setAttribute("fill", "black");
                profilePopout.classList.replace("theme-light", "theme-dark");
                let notif = document.createElement("div");
                notif.classList.add("defaultColor-24IHKz");
                notif.classList.add("section-3FmfOT");
                notif.classList.add("text-sm-normal-3Zj3Iv");
                notif.innerHTML = "Light Mode Filtered";
                profilePopout.children[0].lastChild.insertBefore(notif, null);
                console.log("Riddeth of thy blinding light");
            } else {
                console.log("Dark theme profile");
            }
        } else {
            console.log("Non-stylized profile");
        }
    } else {
        return;
    }
}
let container = document.getElementsByClassName("layerContainer-2v_Sit")[1];
let observer = new MutationObserver((m, c) => {
    convertProfileDark(container);
});
observer.observe(container, {childList: false, attributes: true, subtree: true});
convertProfileDark(container);

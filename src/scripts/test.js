var activeTab = 1;

export function ScrollToNft(id) {    
    var scrollVal = id < 7 ? id + 1 : id;

    if (window.innerWidth < 1250) {
        scrollVal = id;
    }

    document.getElementById("nft" + scrollVal).scrollIntoView({ behavior: "smooth", block: "end" });

    if (id == activeTab) { return; }
    document.getElementById("nfttab" + activeTab).classList.remove("active");
    document.getElementById("nfttab" + id).classList.add("active");
    activeTab = id;
}
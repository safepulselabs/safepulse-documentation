// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="test_env.html"><strong aria-hidden="true">2.</strong> Test Environment</a></li><li class="chapter-item expanded "><a href="concepts.html"><strong aria-hidden="true">3.</strong> Concepts</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="concepts/did.html"><strong aria-hidden="true">3.1.</strong> DID</a></li><li class="chapter-item expanded "><a href="concepts/elysium_protocol.html"><strong aria-hidden="true">3.2.</strong> Elysium Protocol</a></li><li class="chapter-item expanded "><a href="concepts/pulse_token.html"><strong aria-hidden="true">3.3.</strong> Pulse Token</a></li><li class="chapter-item expanded "><a href="concepts/elysianpulse_token.html"><strong aria-hidden="true">3.4.</strong> ElysianPulse Token</a></li><li class="chapter-item expanded "><a href="concepts/decentralized_storage.html"><strong aria-hidden="true">3.5.</strong> Decentralized Storage</a></li></ol></li><li class="chapter-item expanded "><a href="services.html"><strong aria-hidden="true">4.</strong> Services</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="services/payments.html"><strong aria-hidden="true">4.1.</strong> Payment &amp; Agreement</a></li><li class="chapter-item expanded "><a href="services/documents.html"><strong aria-hidden="true">4.2.</strong> Document &amp; Verification</a></li><li class="chapter-item expanded "><a href="services/identity.html"><strong aria-hidden="true">4.3.</strong> Idenitity</a></li></ol></li><li class="chapter-item expanded "><a href="tutorials.html"><strong aria-hidden="true">5.</strong> Tutorials</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tutorials/verifiable_document.html"><strong aria-hidden="true">5.1.</strong> Verifiable Document</a></li><li class="chapter-item expanded "><a href="tutorials/pledge.html"><strong aria-hidden="true">5.2.</strong> Pledge Contract</a></li><li class="chapter-item expanded "><a href="tutorials/escrow.html"><strong aria-hidden="true">5.3.</strong> Escrow</a></li><li class="chapter-item expanded "><a href="tutorials/doc_reg.html"><strong aria-hidden="true">5.4.</strong> Document Registry</a></li><li class="chapter-item expanded "><a href="tutorials/did.html"><strong aria-hidden="true">5.5.</strong> DID</a></li><li class="chapter-item expanded "><a href="tutorials/vc.html"><strong aria-hidden="true">5.6.</strong> Verifiable Credentials</a></li><li class="chapter-item expanded "><a href="tutorials/asset_paywall.html"><strong aria-hidden="true">5.7.</strong> Asset Paywall</a></li></ol></li><li class="chapter-item expanded "><a href="troubleshooting.html"><strong aria-hidden="true">6.</strong> Troubleshooting</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="troubleshooting/asset_registry.html"><strong aria-hidden="true">6.1.</strong> Asset Paywall</a></li><li class="chapter-item expanded "><a href="troubleshooting/escrow.html"><strong aria-hidden="true">6.2.</strong> Escrow</a></li><li class="chapter-item expanded "><a href="troubleshooting/document_registry.html"><strong aria-hidden="true">6.3.</strong> Document Registry</a></li></ol></li><li class="chapter-item expanded "><a href="pricing.html"><strong aria-hidden="true">7.</strong> Revenue</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="revenue/token.html"><strong aria-hidden="true">7.1.</strong> Execution Asset</a></li><li class="chapter-item expanded "><a href="revenue/payg.html"><strong aria-hidden="true">7.2.</strong> Pay-As-You-Go</a></li><li class="chapter-item expanded "><a href="revenue/plans.html"><strong aria-hidden="true">7.3.</strong> Subscriptions</a></li><li class="chapter-item expanded "><a href="revenue/target_market.html"><strong aria-hidden="true">7.4.</strong> Target Market</a></li></ol></li><li class="chapter-item expanded "><a href="privacy.html"><strong aria-hidden="true">8.</strong> Privacy Policy</a></li><li class="chapter-item expanded "><a href="terms.html"><strong aria-hidden="true">9.</strong> Terms &amp; Conditions</a></li><li class="chapter-item expanded "><a href="transparency.html"><strong aria-hidden="true">10.</strong> Transparency</a></li><li class="chapter-item expanded "><a href="faq.html"><strong aria-hidden="true">11.</strong> FAQ</a></li><li class="chapter-item expanded "><a href="contact.html"><strong aria-hidden="true">12.</strong> Contact Us</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);

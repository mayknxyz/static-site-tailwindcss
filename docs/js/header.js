class CustomHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <header class="bg-black sticky top-0 z-50">
                <div class="container mx-auto relative grid grid-flow-col auto-cols-max place-content-between p-2">
                    <div class="grid gap-2 grid-flow-col auto-cols-max content-center"> 
                        <a href="index.html" class="">
                            <img src="images/vhan-logo.svg" class="h-16" alt="Automeyt Logo">
                        </a>
                        <em class="text-white font-normal grid content-center">
                            Static Site TailwindCSS
                        </em>
                    </div>
                    <nav class="hidden lg:grid" id="nav_list">
                        <ul class="absolute lg:relative right-0 w-full rounded-b-lg lg:grid lg:grid-flow-col lg:auto-cols-max lg:gap-6 lg:content-center py-2 text-center font-medium
                            text-white bg-gradient-to-l from-vhn-blue-46s to-vhn-purple-light-191s lg:from-transparent  lg:to-transparent">
                            <li >
                                <a href="index.html">HOME</a> 
                            </li>
                            <li>
                                <a href="page-2.html">PAGE-2</a> 
                            </li>
                            <li>
                                <a href="page-3.html">PAGE-3</a> 
                            </li>

                        </ul>
                    </nav>
                    <div class="lg:hidden grid place-content-end p-4 space-y-2 rounded shadow" onclick="toggleNav()">
                        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                    </div>
                </div>
            </header>
        `;
	}
}

customElements.define("custom-header", CustomHeader);

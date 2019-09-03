                    <div class="bg-gray-100 py-4 px-6">
                        <form class="w-full flex">
                            <img class="w-10 h-10 flex-shrink-0 rounded-full border border-gray-200" src="{{ auth()->user()->the_avatar }}">
                            <div class="ml-3 w-full">
                                <textarea 
                                    onkeyup="if(event.shiftKey && event.keyCode == 13 || event.keyCode == 8) {this.style.height='5px';this.style.height=(this.scrollHeight) + 'px';} else if(event.keyCode == 13) {console.log(this.value); this.value = ''; event.preventDefault();} " 
                                    class="rounded focus:shadow w-full border border-gray-200 py-2 h-10 px-4 text-sm focus:outline-none focus:border-gray-300" placeholder="Tulis komentar kamu ..." name="message"
                                ></textarea>
                                <p class="text-xs text-gray-600">Harap berkomentar sesuai <a href="#" class="text-indigo-700 font-bold">aturan kami</a></p>
                            </div>
                        </form>
                    </div>
                    <div class="px-6 py-3 bg-gray-100 rounded-bl rounded-br">
                        <div class="flex">
                            <img class="rounded-full w-10 h-10 flex-shrink-0" src="https://via.placeholder.com/40x40">
                            <div class="ml-3 w-full">
                                <p class="mx-1 text-blue-500 text-xs font-semibold float-right">3 Min</p>
                                <h4 class="mb-1 font-bold text-sm">Muhamad Nauval Azhar <span class="text-gray-600 font-normal">(@itskodinger)</span></h4>
                                <div class="text-xs text-gray-600">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>

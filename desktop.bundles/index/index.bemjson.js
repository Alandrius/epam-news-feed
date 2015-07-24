({
	block: 'page',
	title: 'EPAM news feed',
	head : [
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
    ],
	styles: [
		{ elem: 'css', url: '_index.css' }
	],
	scripts: [
		{ elem : 'js', url : 'visual.js' }
	],
	content: [
		{
			block: 'header',
			content: [

				{
					block: 'wrapper',
					content: [
						{
							block: 'logo',
							content: [
								{
									elem: 'icon',
								},
								{
									elem: 'text',
									content: 'IT News Hub'
								}
								
							]
						},
						{
							block: 'search',
							content:[
								{
									elem: 'search-input',
									content: [
										{
											block: 'input',
											type: 'search',
											placeholder: 'Search'

										},
										{
											block: 'button',
											type: 'submit'
										}
									]
								}
							]
						},
						{
							block: 'nav',
							content: [
								{
									block : 'menu-top',
									content : [
										{
											block : 'menu-item',
											mods : { type : 'link' },
											content : {
												block : 'link',
												url : 'http://google.com',
												content : 'About'
											}
										},
										{
											block : 'menu-item',
											mods : { type : 'link' },
											content : {
												block : 'link',
												url : 'http://google.com',
												content : 'News hub'
											}
										},
										{
											block : 'menu-item',
											mods : { type : 'link' },
											content : {
												block : 'link',
												url : 'http://google.com',
												content : 'Contacts'
											}
										}
									]
								},
								{
									block : 'menu-top-collapsed',
									content : [
										{
											block : 'search-ico'
										},
										{
											block : 'menu-ico'
										}
									]
								}
								
							]
						}
					]
				}
			]
		},
		{
			block: 'content',
			content: [
				{
					block: 'wrapper',
					mix: { block: 'content' },
					content: [
						{
							block: 'news-feed'
						}
					]
				}
			]
		},
		{
			block: 'footer',
			content: [
				{
					block: 'wrapper',
					mix: { block: 'footer' },
					content: [
						{
							block: 'social',
							content: [
								{
									block: 'simple-header',
									content: 'Social activity'
								},
								{
									block : 'footer-ico',
									mods : { type : 'twitter' },
									tag : 'a'
								},
								{
									block : 'footer-ico',
									mods : { type : 'pinterest' },
									tag : 'a'
								},
								{
									block : 'footer-ico',
									mods : { type : 'youtube' },
									tag : 'a'
								},
								{
									block : 'footer-ico',
									mods : { type : 'facebook' },
									tag : 'a'
								},
								{
									block : 'footer-ico',
									mods : { type : 'google' },
									tag : 'a'
								},
								{
									block : 'footer-ico',
									mods : { type : 'instagram' },
									tag : 'a'
								}
							]
						},
						{
							block: 'links',
							content: [
								{
									block: 'simple-header',
									content: 'Helpful links'
								},
								{
									block : 'menu-links',
									content : [
										{
											elem : 'menu-item',
											mods : { type : 'link' },
											content : {
												block : 'link',
												url : 'http://google.com',
												content : 'Link 1'
											}
										},
										{
											elem : 'menu-item',
											mods : { type : 'link' },
											content : {
												block : 'link',
												url : 'http://google.com',
												content : 'Link 2'
											}
										},
										{
											block : 'menu-item',
											mods : { type : 'link' },
											content : {
												block : 'link',
												url : 'http://google.com',
												content : 'Link 3'
											}
										},
										{
											elem : 'menu-item',
											mods : { type : 'link' },
											content : {
												block : 'link',
												url : 'http://google.com',
												content : 'Link 4'
											}
										},
										{
											block : 'menu-item',
											mods : { type : 'link' },
											content : {
												block : 'link',
												url : 'http://google.com',
												content : 'Link 5'
											}
										}
									]
								}
							]
						},
						{
							block: 'steps',
							content: [
								{
									block: 'simple-header',
									content: 'Success steps'
								},
								{
									block : 'menu-steps',
									tag : 'ol',
									content : [
										{
											elem : 'menu-item',
											tag : 'li',
											content : 'Step 1'
										},
										{
											elem : 'menu-item',
											tag : 'li',
											content : 'Step 2'
										},
										{
											elem : 'menu-item',
											tag : 'li',
											content : 'Step 3'
										},
										{
											elem : 'menu-item',
											tag : 'li',
											content : 'Step 4'
										},
										{
											elem : 'menu-item',
											tag : 'li',
											content : 'Step 5'
										}
									]
								}
							]
						},
						{
							block: 'contacts',
							content: [
								{
									block: 'simple-header',
									content: 'Contacts'
								},
								{
									block : 'menu-contacts',
									content : [
										{
											elem : 'menu-item',
											mods : { type : 'location' },
											content : 'Glendale, Ohio',
										},
										{
											elem : 'menu-item',
											mods : { type : 'link' },
											content : {
												block : 'link',
												url : 'mailto:juan.kelly@example.com',
												content : 'juan.kelly@example.com'
											}
										},
										{
											elem : 'menu-item',
											content : '(508)-639-54-88'
										},
										{
											elem : 'menu-item',
											content : '(103)-409-4107'
										},
										{
											elem : 'menu-item',
											content : 'Juan Kelly'
										}
									]
										
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'haze'
		},
		{
			block: 'modal-window',
			content: [
				{
					block: 'close-ico'
				},
				{
					elem: 'content'
				}
			]
		}
	]
});

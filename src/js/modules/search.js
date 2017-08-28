$('#main-search').autoComplete({
	minChars: 1,
	source: function(term, suggest){
		term = term.toLowerCase();
		var choices = [['Коробка монтажная', 'product'],['Монтажные коробки для открытой установки', 'product', 'Категория'],['Монтажные коробки для полых стен', 'product', 'Категория'],['Монтажные коробки для твердый стен', 'product', 'Категория'],['Коробка монтажная DKC', 'product'],['Коробка взырозащитная ОВО ТМ', 'product'],['Коробка установочная Schneider', 'product'], ['Коробка распределительная гипсокартон KOPOS KO 97/L', 'product']];
		var suggestions = [];
		for (i=0;i<choices.length;i++)
			if (~(choices[i][0]+' '+choices[i][1]).toLowerCase().indexOf(term)) suggestions.push(choices[i]);
		suggest(suggestions);
	},
	renderItem: function (item, search){
		search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
		return '<div class="one-result"><a href="./'+item[1]+'.html" class="'+item[2]+'"><span class="category">'+item[2]+'</span>'+item[0].replace(re, "<b>$1</b>")+'</a></div>';
	}

	/*,
	 onSelect: function(e, term, item){
	 alert('Item "'+item.data('langname')+' ('+item.data('lang')+')" selected by '+(e.type == 'keydown' ? 'pressing enter' : 'mouse click')+'.');
	 }*/
});
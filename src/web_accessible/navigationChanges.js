$(document).ready(function() {
    const navigation = $('#nav-tabs');

    if(navigation.length > 0) {
        var link = document.createElement('a');
        link.href = '/calendar';
        link.text = 'Full Calendar';
        link.setAttribute('aria-labelledby', 'nav-tabs');

        var listItem = document.createElement('li');
        listItem.appendChild(link);

        navigation.append(listItem);
    }
});

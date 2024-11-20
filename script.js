function toggleChest(chest) {
    const chestImage = chest.querySelector('.chest-image');
    const chestContent = chest.querySelector('.chest-content');

    if (chestContent.classList.contains('hidden')) {
        chestImage.style.display = 'none';
        chestContent.classList.remove('hidden');
    } else {
        chestImage.style.display = 'block';
        chestContent.classList.add('hidden');
    }
}

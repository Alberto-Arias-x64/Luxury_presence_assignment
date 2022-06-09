const calculate_width = () => {
    const img_width = document.getElementById('about_img').clientWidth
    document.getElementById('about_img').style.height = img_width
    console.log(img_width)
}
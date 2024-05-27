<script>
    var nodeP = document.querySelectorAll("p");
    var pList = Array.from(nodeP);
    for(i = 0; i < pList.length; i++){
        var newP = pList[i].innerHTML.replaceAll(" :", "&nbsp;:").replaceAll(" ?", "&nbsp;?").replaceAll(" !", "&nbsp;!").replaceAll(" ;", "&nbsp;;").replaceAll(" €", "&nbsp;€").replaceAll("« ", "«&nbsp;").replaceAll(" »", "&nbsp;»");
        pList[i].innerHTML = newP;
    }
</script>

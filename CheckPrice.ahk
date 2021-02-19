#a::

Xl := ComObjActive("Excel.Application") ;создается handle к текущему активному листу exel

While, xl.ActiveCell.Value <> ""
{
    item := xl.ActiveCell.Value
    WinActivate, Session A
    clipJde1 := CopyToClipboard()
    description1 := SubStr(clipJde1, 82*(6-1)+47, 34)
    clipboard := item
    Send, {del 5}^v{enter}
    Log("description1 = '" . description1 . "'")
    description2 := description1
    while (description1 = description2)
    {
        Sleep 1000 ; TODO: разобраться почему не работает с таймаутом в 10 мсек
        clipJde2 := CopyToClipboard()
        description2 := SubStr(clipJde2, 82*(6-1)+47, 34)
    }
    cost:= SubStr(clipJde2, 82*(10-1)+62, 15)
    cost:= StrReplace(cost, "," , ".")
    cost:= Ceil(cost*100)/100
    cost:= StrReplace(cost, "." , ",")
    xl.ActiveCell.Offset(0, 7).Value := cost
    Log("item = " . item " cost = " . cost " description2 = '" . description2 . "'")
    If (description2 = "" or description2 = "                                  ") {
        Log("clipJde2 =`n" . clipJde2)
    }
    xl.ActiveCell.Offset(1, 0).Activate ;TODO: разобраться почему не работает переход на следующую ячейку в фильтре
}
MsgBox, % "Кто молодец?"
Return

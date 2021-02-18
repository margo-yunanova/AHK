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
while (description1 = description2) {
    Sleep 500
    clipJde2 := CopyToClipboard()
    description2 := SubStr(clipJde2, 82*(6-1)+47, 34)
}
; clipJde2 := CopyToClipboard()
cost:= SubStr(clipJde2, 82*(10-1)+62, 15)
cost:= StrReplace(cost, "," , ".")
cost:= Ceil(cost*100)/100
cost:= StrReplace(cost, "." , ",")
; WinActivate, Allprices-6.xlsm
; Sleep, 100
xl.ActiveCell.Offset(0, 7).Value := cost
;xl.ActiveCell.Offset(0, 7).Activate
Log("item = " . item " cost = " . cost " description2 = '" . description2 . "'")
If (description2 = "" or description2 = "                                  ")
{
    Log("clipJde2 =`n" . clipJde2)
}
xl.ActiveCell.Offset(1, 0).Activate
}
MsgBox, % "Кто молодец?"
Return



; StartTime := A_TickCount
; while (description1 = description2) {
 ;    Sleep 10
  ;   clipJde2 := CopyToClipboard()
   ;  description2 := SubStr(clipJde2, 82*(6-1)+47, 34)
;     Log("descriptions " . description1 . "-" . description2)
 ;}
 ;ElapsedTime := A_TickCount - StartTime
 ;Log(ElapsedTime . " milliseconds have elapsed.")

; cost:= SubStr(clipJde2, 82*(10-1)+62, 15)
; StringReplace, cost, cost,`,,.,All
; cost:= StrReplace(cost, "," , ".")
; cost:= Ceil(cost*100)/100
; MsgBox, %cost%
; cost:= StrReplace(cost, "." , ",")
; clipboard := cost 
; Send, ^c
; WinActivate, Allprices-6.xlsm
; xl.ActiveCell.Offset(0, 7).PasteSpecial Paste:=xlPasteFormats
; Send, ^v{Down}
; Return
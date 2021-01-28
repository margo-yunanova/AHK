; CopyToClipboard1(){
;     Clipboard := ""
;     Send, ^c
;     ClipWait, 1
;     Return Clipboard
; }

#a::
Log("start")
; test := " 12,346 "
; StringReplace, test, test,`,,.,All
; Log("test=" . test)
; Log(Round(test, 2))
; Log(Round(" 12.346 ", 2))
; Return


clipExcel := CopyToClipboard()
Send {Right 7}
Sleep, 1000
WinActivate, Session A
clipJde1 := CopyToClipboard()
description1 := SubStr(clipJde1, 82*(6-1)+47, 34)
clipboard := clipExcel
Send, ^v{enter}
description2 := description1
StartTime := A_TickCount
while (description1 = description2) {
    Sleep 10
    clipJde2 := CopyToClipboard()
    description2 := SubStr(clipJde2, 82*(6-1)+47, 34)
    Log("descriptions " . description1 . "-" . description2)
}
ElapsedTime := A_TickCount - StartTime
Log(ElapsedTime . " milliseconds have elapsed.")
cost:= SubStr(clipJde2, 82*(10-1)+62, 15)
;StringReplace, cost, cost,`,,.,All
cost:= StrReplace(cost, "," , ".")
cost:= Ceil(cost*100)/100
;MsgBox, %cost%
cost:= StrReplace(cost, "." , ",")
clipboard := cost 
;Send, ^c
WinActivate, Allprices-6.xlsm
Send, ^v{Down}
Return
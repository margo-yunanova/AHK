﻿CopyToClipboard(){
    clipboard := ""
    Send, ^c
    ClipWait, 1
    return clipboard
}
Set1cCell(value){
    Send, {Enter}
    WinWaitActive, ahk_class V8TopLevelFrameSDIsec
    clipboard:= value
    Send, ^v{Enter}
    WinWaitActive, ahk_class V8TopLevelFrameSDI
    ;Sleep, 1000
    MouseMove, 0, 0 
    StartTime := A_TickCount
    while (A_cursor = "Wait")
        Sleep 10
    ElapsedTime := A_TickCount - StartTime
    Log(ElapsedTime . " milliseconds have elapsed.")

}
Log(msg){
    FormatTime time,, yyyy-MM-dd HH:mm:ss
    FileAppend %time%: %msg%`n, ahk.log
}

#s::
;Set1cCell("123")
;Send, {Right 1}
;Return

Log("hotkey #s")
WinActivate, Session A
clip := CopyToClipboard()
pick:= SubStr(clip, 82*(8-1)+45, 8)
price:= SubStr(clip, 82*(10-1)+59, 15)
weight:= SubStr(clip, 82*(16-1)+21, 15)
Log("Price=" . price)
WinActivate, TM Production
Send {Right 3}
Set1cCell(pick)
Send, {Right 1}
Set1cCell(price)
Send {Right 2}
Set1cCell(weight)
Send {Left 6}{Down 1}
CopyToClipboard()
WinActivate, Session A
Send, {F3}
Sleep 1000
Send {Up 4}{TAB}{Del 5}^v{Enter}
;Send {Up 4}{TAB}{Del 5}
;Send, ^v
;Sleep 1000
;Send {Enter}
TrayTip, done, done
Return
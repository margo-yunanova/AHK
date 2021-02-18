;SetTitleMatchMode RegEx

; - Сообщение (HTML) 
#IfWinActive - Сообщение \(HTML\) $ ahk_class rctrl_renwnd32 ahk_exe OUTLOOK.EXE
#z::
Send, {alt}ЯАьП

#IfWinActive - Outlook$ ahk_class rctrl_renwnd32 ahk_exe OUTLOOK.EXE
#z::
Send, {alt}БСЮВАьП

#IfWinActive
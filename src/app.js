function typeOutMessage(targetElementId, message, minTypingInterval, maxTypingInterval) {
    let targetElement = document.getElementById(targetElementId);
    let currentIndex = 0;
    let innerHTML = "";

    function type() {
        let timeout = minTypingInterval;
        if (currentIndex < message.length) {
            if (message.charAt(currentIndex) === "\r\n" || message.charAt(currentIndex) === "\n") {
                innerHTML += "\n";
                currentIndex++;
                timeout = Math.random() * (maxTypingInterval - minTypingInterval) + minTypingInterval;
            } else if (innerHTML.endsWith("\n")) {
                innerHTML += "[root@framework44] ";
            } else {
                innerHTML += message.charAt(currentIndex);
                currentIndex++;
            }
            targetElement.innerHTML = innerHTML + "_";
            setTimeout(type, timeout);
        }
    }

    setTimeout(type, Math.random() * (maxTypingInterval - minTypingInterval) + minTypingInterval);
}

message = `
Booting Framework44...
Loading kernel modules...
Mounting file systems...
Starting system logging service...
Configuring network interfaces...
Initializing hardware detection and evaluation...
Scanning for available hardware components...
Found hardware component 0: Capture system 0 [PCI bus address: 00:02.0]
Found hardware component 1: Flow modulator [PCI bus address: 01:00.0]
Found hardware component 2: Controller 0 [PCI bus address: 02:00.0]
Found hardware component 3: Controller 1 [PCI bus address: 02:05.0]
Warming system bus: 0...1..2...3
Hardware component 3 (Controller 0) detected as most suitable for optimal performance.
Setting Controller 0 as the primary hardware component...
Starting optimization loop
All required software components for Controller 0 have been installed.
Welcome to Framework44!
`

// when page is ready (no jquery)
document.addEventListener("DOMContentLoaded", function (event) {
    typeOutMessage("terminal", message, 100, 2000);
});

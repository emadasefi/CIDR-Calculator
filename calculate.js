///////////////////////////////////////////////////////////////////////////////////
//;==========================================
//; Title:  CIDR Calculator
//; Author: Emad Asefi / @emadasefi / emad.asefi@gmail.com
//; Version:  - v1.1
//;==========================================
///////////////////////////////////////////////////////////////////////////////////
// Convert an IPv4 address in dot-decimal format to a 32-bit unsigned integer.
const ip4ToInt = ip => ip.split('.').reduce((int, oct) => (int << 8) + parseInt(oct, 10), 0) >>> 0;

// Convert a 32-bit unsigned integer back to its IPv4 address representation.
const intToIp4 = int => [(int >>> 24) & 0xff, (int >>> 16) & 0xff, (int >>> 8) & 0xff, int & 0xff].join('.');

// Calculate start and end IP addresses of a given CIDR range.
const calculateCidrRange = cidr => {
    const [range, bits = 32] = cidr.split('/');
    const mask = ~(2 ** (32 - bits) - 1);
    const startIp = ip4ToInt(range) & mask;
    const endIp = ip4ToInt(range) | ~mask;
    return [startIp, endIp];
};

// Generate a list of all IP addresses between two given integers.
const listIpsInRange = (startIp, endIp) => {
    const ips = [];
    for (let ip = startIp; ip <= endIp; ip++) {
        ips.push(intToIp4(ip));
    }
    return ips;
};

function calculate() {
    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        const cidrsInput = document.getElementById('cidrs').value.trim().split('\n');
        let resultOne = "\u2502 CIDR             \u2502 Start IP         \u2502 End IP           \u2502 Total IPs \u2502\n";
        resultOne += "\u2502------------------\u2502------------------\u2502------------------\u2502-----------\u2502\n";
        let resultTwoList = [];

        cidrsInput.forEach(cidr => {
            const [startIp, endIp] = calculateCidrRange(cidr);
            const ipList = listIpsInRange(startIp, endIp);
            resultOne += `| ${cidr.padEnd(16)} | ${intToIp4(startIp).padEnd(16)} | ${intToIp4(endIp).padEnd(16)} | ${ipList.length.toString().padEnd(9)} |\n`;
            resultTwoList.push(`CIDR: ${cidr}\nIPs:\n${ipList.join(', ')}`);
            resultTwoList.push('------------------------------------------------------------------------------');
        });

        document.getElementById('resultOne').innerText = resultOne.replace(/\\u2502/g, ' ').trim();
        document.getElementById('resultTwo').innerText = resultTwoList.join('\n\n');
        document.getElementById('loading').style.display = 'none';

        // Show download buttons after results are displayed
        document.getElementById('downloadResultOne').style.display = 'inline-block';
        document.getElementById('downloadResultTwo').style.display = 'inline-block';

    }, 500); // Simulate loading time
};
///////////////////////////////////////////////////////////////////////////////////
//;==========================================
//; Title:  CIDR Calculator
//; Author: Emad Asefi / @emadasefi / emad.asefi@gmail.com
//; Version:  - v1.1
//;==========================================
///////////////////////////////////////////////////////////////////////////////////
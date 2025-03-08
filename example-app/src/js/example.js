import { NativeAudio } from '@capacitor-trancee/native-audio';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    NativeAudio.echo({ value: inputValue })
}

import * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Viewer } from './components/Viewer';

const ACCESS_TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUSIsInBpLmF0bSI6Ijd6M2gifQ.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJsVGc2U09jSXdKSGtXSnExVXY4UGw5eEVGUU5JcldLViIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwNjAiLCJqdGkiOiJCUzZPdmxTYWtOUjhGRkVySUVmUmNqZVJ6U1hXNEFvOWZlSTFXbTUwSFNUWlJjdmx1VHpRbjBtMG0xMWh2ZTBVIiwiZXhwIjoxNjk2NjEyMjgyfQ.lFZ_D0hrdn_JuJEvVT-w4ISqwKIEdEp1VIle_Zyip5tcY6Ka3DprNHhyqhDtnBu6pBPmxciLe1UHcprJyXO5ppIfAU14GqKBIQ7QXzsffDsrC29yBT8-FugIQGqonZuslLiSeGhnaqvnn_Xn38sFKS57M4tW1TcfSH9z8Je2ureAol4g8X1bHOJcm5_m-FBa54DX2N1TDCP--RUzwU7l7l_j508Va5uzrqMug5o5hzE520E5XWdzz_ED2Jl-b0MFBjZyWi55Je9fFAcIJGizKbe-acGlnR8-YqeN6u_DIBeSDsQ-q7lXKO32PCHqvL_tARfEiumyoP7u-NbFgImqHQ';
const MODEL_URN = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bHRnNnNvY2l3amhrd2pxMXV2OHBsOXhlZnFuaXJ3a3YtYmFzaWMtYXBwL3JzdGFkdmFuY2Vkc2FtcGxlcHJvamVjdC5ydnQ';

export const App: React.FunctionComponent = () => {
    const [cameraPos, setCameraPos] = useState<{ x: number, y: number, z: number }>({ x: 0, y: 0, z: 0 });
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [isolatedIds, setIsolatedIds] = useState<number[]>([]);
    return (
        <div>

            <div style={{ position: 'relative', width: '1900px', height: '900px' }}>
                <Viewer
                    runtime={{ env: 'AutodeskProduction2', api: 'streamingV2', accessToken: ACCESS_TOKEN }}
                    model={{ urn: MODEL_URN }}
                    extensions={['Autodesk.DocumentBrowser']}
                    selectedIds={selectedIds}
                    onCameraChange={ev => setCameraPos(ev.camera.getWorldPosition())}
                    onSelectionChange={ev => setSelectedIds(ev.ids)}
                    onIsolationChange={ev => setIsolatedIds(ev.ids)}
                />
            </div>

        </div>
    );
};

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
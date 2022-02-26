import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui'
require('@solana/wallet-adapter-react-ui/styles.css')

const App = () => {
	const network = WalletAdapterNetwork.Devnet
    const endpoint = clusterApiUrl(network)
	const wallets = [
		new PhantomWalletAdapter(),
		new SlopeWalletAdapter(),
		new SolflareWalletAdapter({ network }),
		new TorusWalletAdapter(),
		new LedgerWalletAdapter(),
		new SolletWalletAdapter({ network }),
		new SolletExtensionWalletAdapter({ network }),
	]

	return (
		<>
			<h1>Hello what up</h1>
			<ConnectionProvider endpoint={endpoint}>
				<WalletProvider wallets={wallets} autoConnect>
					<WalletModalProvider>
						<WalletMultiButton />
						<WalletDisconnectButton />
						{ /* Your app's components go here, nested within the context providers. */ }
					</WalletModalProvider>
				</WalletProvider>
			</ConnectionProvider>
		</>
	)
}

export default hot(App)

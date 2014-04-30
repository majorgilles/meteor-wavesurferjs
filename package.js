Package.describe({
	summary: 'WaveSurferjs Web Audio Waveform Visualizer'
});

Package.on_use(function (api) {
	if(api.export) {
		api.export('WaveSurfer');
	}
	api.add_files('lib/src/wavesurfer.js', 'client');
	api.add_files('export-wavesurfer.js', 'client');
});
Package.describe({
	name: 'majorgilles:wavesurfer',
	summary: 'WaveSurferjs Web Audio Waveform Visualizer wrapper for meteor',
	version: '0.0.1',
	git:  'https://github.com/majorgilles/meteor-wavesurferjs'
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.0');

	api.addFiles('lib/src/wavesurfer.js');
	api.addFiles('export.js');

	api.export('WaveSurfer');
});
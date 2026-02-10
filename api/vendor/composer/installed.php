<?php return array(
    'root' => array(
        'name' => 'jamesfloss/jimfloss',
        'pretty_version' => 'dev-main',
        'version' => 'dev-main',
        'reference' => '326d843be4023001f437730e36f213cbf86acb81',
        'type' => 'project',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        'jamesfloss/jimfloss' => array(
            'pretty_version' => 'dev-main',
            'version' => 'dev-main',
            'reference' => '326d843be4023001f437730e36f213cbf86acb81',
            'type' => 'project',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'johnpbloch/wordpress-core' => array(
            'pretty_version' => 'dev-master',
            'version' => 'dev-master',
            'reference' => 'a74e0221c1e66c3e0052e927da5c9b550435ace5',
            'type' => 'wordpress-core',
            'install_path' => __DIR__ . '/../../wordpress',
            'aliases' => array(
                0 => '9999999-dev',
            ),
            'dev_requirement' => false,
        ),
        'johnpbloch/wordpress-core-installer' => array(
            'pretty_version' => 'dev-master',
            'version' => 'dev-master',
            'reference' => '72493e339152fecd671766302c87b0b21fb6d569',
            'type' => 'composer-plugin',
            'install_path' => __DIR__ . '/../johnpbloch/wordpress-core-installer',
            'aliases' => array(
                0 => '9999999-dev',
            ),
            'dev_requirement' => false,
        ),
        'wordpress/core-implementation' => array(
            'dev_requirement' => false,
            'provided' => array(
                0 => 'dev-master',
            ),
        ),
    ),
);

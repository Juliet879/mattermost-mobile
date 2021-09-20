// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {StyleSheet, View} from 'react-native';

import MessageAttachment from './message_attachment';

type Props = {
    attachments: MessageAttachment[];
    postId: string;
    metadata?: PostMetadata;
    theme: Theme;
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
    },
});

const MessageAttachments = ({attachments, metadata, postId, theme}: Props) => {
    const content = [] as React.ReactNode[];

    attachments.forEach((attachment, i) => {
        content.push(
            <MessageAttachment
                attachment={attachment}
                key={'att_' + i.toString()}
                metadata={metadata}
                postId={postId}
                theme={theme}
            />,
        );
    });

    return (
        <View style={styles.content}>
            {content}
        </View>
    );
};

export default MessageAttachments;
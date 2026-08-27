const useEffectGuide = 'https://react.dev/learn/you-might-not-need-an-effect';

export default {
  meta: {
    name: '@timobechtel/style-react',
  },
  rules: {
    'prefer-no-use-effect': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Prompts developers to avoid unnecessary Effects.',
          url: useEffectGuide,
        },
        messages: {
          preferNoUseEffect: `You might not need an Effect. Read ${useEffectGuide} before using useEffect.`,
        },
        schema: [],
      },
      create(context) {
        return {
          ImportSpecifier(node) {
            if (
              node.parent.source.value === 'react' &&
              (node.imported.name ?? node.imported.value) === 'useEffect'
            ) {
              context.report({
                node,
                messageId: 'preferNoUseEffect',
              });
            }
          },
        };
      },
    },
  },
};
